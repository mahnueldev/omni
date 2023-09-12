import { useState } from 'react';
import { Button, Input, Spacer } from '../components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { useLoginMutation } from '../features/auth/authApiSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      // Handle errors using isError and error from RTK
      console.error(err); // You can log the error for debugging purposes
      if (err.status === 401) {
     
        setErrorMessage(err.data.msg);
      } else if (err.status === 403) {
       
        setErrorMessage(err.data.msg);
      
      } else {
        // Handle other errors
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className='flex flex-col justify-center items-center h-screen'>
      <div className='w-3/12'>
        <form onSubmit={handleSubmit}>
          {/* Use the error prop in Input component */}
          <Input
            placeholder='Email'
            // error={errorMessage} 
            type='text'
            onChange={handleUserInput}
            value={email}
          />
          <Input
            placeholder='Password'
            type='password'
            onChange={handlePwdInput}
            value={password}
          />
          <Spacer marginVertical='mt-8' />
          <Button text='Login' />
          {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
        </form>
      </div>
    </main>
  );
  return content;
};

export default Login;
