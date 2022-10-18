import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactsList.module.css';

const ContactList = ({ contacts, onDeleteCard }) => {
  return (
    <ul className={css.phonebook_list}>
      <ContactListItem contacts={contacts} onDelete={onDeleteCard} />
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
export default ContactList;
