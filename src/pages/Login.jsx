import { Button, Input, Spacer } from '../components';

const Login = () => {
  return (
    <main className='flex flex-col justify-center items-center h-full'>
      <div className=' w-3/12'>
        <Input placeholder='Email' error='error' type='text' />
        <Input placeholder='Password' type='password' />
      </div>
      <Spacer marginVertical='mt-4' />
      <Button text='Login' />
    </main>
  );
};

export default Login;
