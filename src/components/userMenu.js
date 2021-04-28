import propTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import styles from '../components/Navigation.module.css'
import {useDispatch} from 'react-redux'
import authOperation from '../redux/auth/auth-operations'


export default function UserMenu({getUsername, logOut}) {

    return (
      <>
        <span className={styles.userName}>Hello, {getUsername }</span>
        <Button variant="danger" onClick={logOut}>LogOut</Button> 
      </>
    );
  }

  UserMenu.propTypes = {
    getUsername: propTypes.string.isRequired,
    logOut: propTypes.func.isRequired
  }