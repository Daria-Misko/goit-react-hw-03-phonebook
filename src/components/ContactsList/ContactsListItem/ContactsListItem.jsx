import PropTypes from 'prop-types';
import { DelButton, ListItem } from './ContactsListItem.styles';

export const ContactsListItem = ({
  contact: { name, number, id },
  handleDelete,
}) => {
  return (
    <ListItem>
      {name}: {number}
      <DelButton onClick={() => handleDelete(id)}>Delete</DelButton>
    </ListItem>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
