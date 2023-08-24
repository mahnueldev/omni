import { Button, Input, Spacer } from '../components';

const Register = () => {
  return (
    <main className='flex flex-col justify-center items-center h-full'>
      <div className=' w-3/12'>

      <Input placeholder='First Name'  type="text"/>
      <Input placeholder='Last Name'  type="text"/>
      <Input placeholder='Email'  type="text"/>
      <Input placeholder='Password' type="password"/>
      </div>
      <Spacer marginVertical="mt-4"/>
      <Button text="Register"/>
    </main>
  );
};

export default Register;
