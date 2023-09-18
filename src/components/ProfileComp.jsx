import { BsBell, BsChatLeftText } from 'react-icons/bs';
import { useGetUserProfileQuery } from '../features/user/userApiSlice';

const iconStyle = `text-light-400 w-4`;
const ProfileComp = () => {
  const { data: user, isSuccess: isSuccessUser } = useGetUserProfileQuery();

  let singleUser = null;
  if (isSuccessUser) {
    const userData = user; // Access the user data directly
    singleUser = (
      <div className=''>
        <h2 className='text-base ml-4 font-bold'>{userData.firstName}</h2>
      </div>
    );
  }

  return (
    <div className='flex space-x-8 items-center'>
      <BsChatLeftText className={iconStyle} />
      <BsBell className={iconStyle} />
      <section className='flex items-center rounded-full '>
        <img
          src='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
          alt='image'
          className='w-8 h-8 rounded-full border border-dark-400'
        />

        <p className='text-light-400 mr-6 font-extralight'>{singleUser}</p>
      </section>
    </div>
  );
};

export default ProfileComp;
