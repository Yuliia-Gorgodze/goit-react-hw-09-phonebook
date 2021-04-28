import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles.module.css';
import selectors from '../redux/selectors'
import contactsOperation from '../redux/contacts/contacts-operation';


 export default function AddNameContact (){
   const [name, setName] = useState('')
   const [number, setNumber] = useState('')
   const contacts = useSelector( selectors.getContact)
   const dispatch = useDispatch()
   const inputChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`ой, что то пошло не так`);
    }
  }, []);
  const checkContact = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };
  const addContact = useCallback(event=>{
    event.preventDefault();
    if (checkContact(name)) {
          alert('такой контакт уже есть');
          return;
        }else{
          dispatch(contactsOperation.addContacts({ name, number}));
          setName('')
          setNumber('')
        }
  }, [dispatch, name, number])
  return (
          <form className={styles.form} onSubmit={addContact}>
            <label className={styles.input}>
              Введите имя контакта:{' '}
              <input
                className={styles.inputValue}
                type="text"
                name="name"
                value={name}
                onChange={inputChange}
              ></input>
            </label>
            <label className={styles.input}>
              Введите номер контакта:{' '}
              <input
                className={styles.inputValue}
                type="text"
                name="number"
                value={number}
                onChange={inputChange}
              ></input>
            </label>
            <button className={styles.buttonAddContact} type="submit">
              Добавить в контакты
            </button>
          </form>
        );
 }
