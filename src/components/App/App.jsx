import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import css from './App.module.css';

const LOCALSTORAGE_KEY = 'user-phonebook';

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
};

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      getLocalStorage() ?? [
        { id: 'id-1', name: 'Pointer Event', number: '459-12-56' },
        { id: 'id-2', name: 'Jack Richardson', number: '443-89-12' },
        { id: 'id-3', name: 'Stella Artois', number: '645-17-79' },
        { id: 'id-4', name: 'Phillp Morris', number: '227-91-26' },
        { id: 'id-5', name: 'Klementina Zakruzhetsaya', number: '427-99-17' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleInputContact = ({ name, number }) => {
    const contatctsArr = contacts.map(({ name }) => name);
    if (contatctsArr.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prev => (prev = [...prev, { id: nanoid(), name, number }]));
    }
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.section}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm addContact={handleInputContact} />
      {!!contacts?.length && (
        <div>
          <h1 className={css.header}>Contacts</h1>
          <Filter changeFilter={handleFilter} filter={filter} />

          <ContactsList
            contacts={contacts.filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )}
            onDeleteCard={handleDeleteContact}
          />
        </div>
      )}
    </div>
  );
};
