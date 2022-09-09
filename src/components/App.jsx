import { MainContainer } from './App.styled';

import ContactInputSection from './ContactInput';
import ContactListSection from './ContactList';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';
import { getFilteredContacts } from '../redux/contacts/contacts-selectors';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? contactsExample
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };
  // const handleFormSubmit = data => {
  //   const alreadyExist = contacts.find(el => el.name === data.name);
  //   const contact = { id: nanoid(), name: data.name, number: data.number };
  //   alreadyExist
  //     ? alert(`${data.name} is already in contacts`)
  //     : setContacts(prevContacts => [...prevContacts, contact]);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <MainContainer>
      <ContactInputSection onSubmit={onAddContact} />

      <ContactListSection
        contacts={contacts}
        onDeleteContact={onRemoveContact}
        value={filter}
        onChange={onSetFilter}
      />
    </MainContainer>
  );
};
export default App;
