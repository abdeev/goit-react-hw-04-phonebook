import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const setMap = {
    name: setName,
    number: setNumber,
  };

  const handlerAddValue = e => {
    const { value, name } = e.target;
    setMap[name](value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className={css.form_input}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerAddValue}
          className={css.input_name}
        />
        <input
          type="tel"
          name="number"
          placeholder="Enter contact number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerAddValue}
          className={css.input_phone}
        />
        <button type="submit" className={css.button_submit}>
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
