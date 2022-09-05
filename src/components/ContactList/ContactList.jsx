import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Filter from 'components/Filter';
import ContactItem from './ContactItem';

const ContactListSection = ({ contacts, onDeleteContact, value, onChange }) => (
  <section>
    <Title>Contacts</Title>
    <Filter value={value} onChange={onChange} />
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
        // <ListItem key={id}>
        //   <p>{name}:</p>
        //   <p>{number}</p>
        //   <button onClick={() => onDeleteContact(id)}>Delete</button>
        // </ListItem>
      ))}
    </List>
  </section>
);
ContactListSection.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactListSection;
const List = styled.ul`
  padding: 0;
  margin: 0;
`;
// const ListItem = styled.li`
//   /* width: 300px; */
//   display: flex;
//   margin: 8px 0;
//   gap: 10px;
//   & p {
//     margin: 0;
//   }
//   & button {
//     margin-left: auto;
//     padding: 2px 4px;
//   }
// `;
const Title = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`;
