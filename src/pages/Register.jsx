import { useState } from 'react';
import { Button, Input, Spacer } from '../components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { useRegisterMutation } from '../features/auth/authApiSlice';
import {Link} from 'react-router-dom'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await register({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (err) {
      // Handle errors using isError and error from RTK
      console.error(err); // You can log the error for debugging purposes
      if (err.status === 401) {
        setErrorMessage(err.data.msg);
      } else if (err.status === 500) {
        setErrorMessage(err.data.msg);
      } else {
        // Handle other errors
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  const handleFirstNameInput = (e) => setFirstName(e.target.value);
  const handleLastNameInput = (e) => setLastName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className='flex flex-col justify-center items-center h-screen'>
      <div className='w-3/12'>
       <form onSubmit={handleSubmit}>
     
        <Input
          placeholder='First Name'
          type='text'
          onChange={handleFirstNameInput}
          value={firstName}
          required
        />
        <Input 
         placeholder='Last Name'
         type='text'
         onChange={handleLastNameInput}
         value={lastName}
         required
        />
        <Input
          placeholder='Email'
          // error={errorMessage}
          type='text'
          onChange={handleEmailInput}
          value={email}
          required
        />
          <Input
            placeholder='Password'
            type='password'
            onChange={handlePwdInput}
            value={password}
            required
          />
    
      <Spacer marginVertical='mt-8' />
      <Button text='Register' />
      <Spacer marginVertical='mt-8' />
      <div className='text-dark-400'>Already have an account? <Link to="/login"><span className='text-light-100'>Login</span></Link> </div>
      {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
        </form>
        </div>
    </main>
  );
  return content;
};

export default Register;
