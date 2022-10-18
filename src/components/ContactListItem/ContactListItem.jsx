import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(contact => (
        <li className={css.list_item} key={contact.id}>
          <p>{contact.name}:</p> <p>{contact.number}</p>
          <button
            type="button"
            onClick={() => onDelete(contact.id)}
            className={css.delete_button}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};

export default ContactListItem;
