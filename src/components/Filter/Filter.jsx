import { Form, Input } from 'components/ContactsForm/ContactsForm.styles';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <Form>
      <label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </Form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
