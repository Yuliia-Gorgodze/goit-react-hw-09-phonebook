import React, {  useState, useCallback  } from 'react'; 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import registerOperation from '../redux/auth/auth-operations'

export default function RegistrazionPage () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch(registerOperation.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );
  const inputChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`ой, что то пошло не так`);
    }
  }, []);
  return (<>
    <h1>Registrazion</h1> 
     <div>
     <Form onSubmit={onSubmitForm}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={inputChange} value={name} name='name' type="name" placeholder="Enter name" />
          <Form.Text className="text-muted">
            We'll add your name
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={inputChange} value={email} name='email' type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  onChange={inputChange} value={password} name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
         </div> </>)
}
