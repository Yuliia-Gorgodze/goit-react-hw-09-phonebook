import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles.module.css';
import contactOperation from '../redux/contacts/contacts-operation';
import selectors from '../redux/selectors'


export default function ContactList (){
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.filteredContacts)
  useEffect(
    () => dispatch(contactOperation.getContacts(), []));
  return (
          <div>
            <ul className={styles.contactList}>
              {contacts &&
                contacts.map(({ id, name, number }) => (
                  <li className={styles.contactCard} key={id}>
                    {name} : {number}
                    <button onClick={() => dispatch(contactOperation.deleteContacts(id))}>Удалить</button>
                  </li>
                ))}
            </ul>
          </div>
        );
}
