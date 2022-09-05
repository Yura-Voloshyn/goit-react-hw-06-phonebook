import { MainContainer } from './App.styled';
import { nanoid } from 'nanoid';
import ContactInputSection from './ContactInput';
import ContactListSection from './ContactList';
import { useState, useEffect } from 'react';

const contactsExample = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? contactsExample
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const handleFormSubmit = data => {
    const alreadyExist = contacts.find(el => el.name === data.name);
    const contact = { id: nanoid(), name: data.name, number: data.number };
    alreadyExist
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, contact]);
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <MainContainer>
      <ContactInputSection onSubmit={handleFormSubmit} />
      {!contacts.length ? (
        <p>Add contact to your phonebook</p>
      ) : (
        <ContactListSection
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
          value={filter}
          onChange={changeFilter}
        />
      )}
    </MainContainer>
  );
};
export default App;
