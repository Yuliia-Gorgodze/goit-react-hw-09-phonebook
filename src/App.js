import React, { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/auth-operations'
import styles from './styles.module.css';


 export default function App () {
   const dispatch = useDispatch();
   useEffect(
    () => dispatch(authOperations.getCurrentUser()), [],);
  return (
          <Suspense fallback={<p>Загружаем.... </p>}>
            <Switch>
           <Navigation/>
          </Switch>
          </Suspense>
        );
 }
