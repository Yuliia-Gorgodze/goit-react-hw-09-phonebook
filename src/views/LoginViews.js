import React,{useState, useCallback } from 'react'; 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

export default function Login ( ){
  const dispatch = useDispatch()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const inputChange = useCallback(e => {
  const { name, value } = e.currentTarget;

  switch (name) {
    case 'email':
      setEmail(value);
      break;
    case 'password':
      setPassword(value);
      break;
    default:
      console.warn(`Ой, что то пошло не так`);
  }
}, []);
const onSubmitForm = useCallback(
  e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  },
  [dispatch, email, password],
);
  return (<>
    <h1> Login</h1>
         <div> 
           <Form onSubmit={onSubmitForm}>
             <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control onChange={inputChange} name='email' value={email} type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label >Password</Form.Label>
              <Form.Control onChange={inputChange} name='password'  value={password}  type="password" placeholder="Password" />
             </Form.Group>
             <Button variant="primary" type="submit">
               Submit
             </Button>
           </Form></div> </>)
};
