import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { useState } from 'react';

const ContactInputSection = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Section>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Section>
  );
};

ContactInputSection.propTypes = {
  onSubmit: PropTypes.func,
};
export default ContactInputSection;

const Section = styled.section`
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  width: 300px;
  border: 2px solid orange;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  & button {
    max-width: 120px;

    margin-left: auto;
    margin-right: auto;
  }
`;
