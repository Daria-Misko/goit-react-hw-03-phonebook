import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Title, Notification } from './App.styles';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const conctacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(conctacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return toast.error(
        `${newContact.name} or ${newContact.number} has already existed`
      );
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getVisiableContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const { addContact, handleFilter, handleDelete, getVisiableContacts } =
      this;
    const contactsList = getVisiableContacts();
    return (
      <>
        <Title>Phonebook</Title>
        <ContactsForm onSubmit={addContact} />
        <Title>Contacts</Title>
        {contactsList.length !== 0 ? (
          <>
            <Filter filter={filter} handleFilter={handleFilter} />
            <ContactsList handleDelete={handleDelete} contacts={contactsList} />
          </>
        ) : (
          <Notification>Contact list is empty =(</Notification>
        )}
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </>
    );
  }
}
