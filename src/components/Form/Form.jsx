import React from 'react';
import { FormStyle, BtnAddContact, LabelName, InputForm } from './Form.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/slice/contactSlice';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const exContact = contacts.some(
    user => user.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );

  const dispatch = useDispatch();

  const onInputText = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (exContact) {
      return alert(`${name} is already in list`);
    }
    setName('');
    setNumber('');
    dispatch(addContact({ name, number, id: nanoid() }));
  };
  return (
    <>
      <h2>Phonebook</h2>
      <FormStyle onSubmit={handleSubmit}>
        <LabelName htmlFor="">
          Name
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputText}
          />
        </LabelName>
        <LabelName htmlFor="">
          Number
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputText}
          />
        </LabelName>

        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </FormStyle>
    </>
  );
}
