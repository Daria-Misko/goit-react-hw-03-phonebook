import { ContactsListItem } from './ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';
import { List } from './ContactsList.styles';

export const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
