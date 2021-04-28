import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {filterAction} from '../redux/filter/filter-actions'
import styles from '../styles.module.css';
import selectors from '../redux/selectors'


export default function Filter () {
  const value = useSelector(selectors.filterContact)
  const dispatch = useDispatch()
  return (
    <label className={styles.input}>
      Кого ищем?{' '}
      <input
        className={styles.inputValue}
        type="text"
        name="filter"
        value={value}
        onChange={event => dispatch(filterAction(event.target.value))}
      ></input>
    </label>
  );
};



