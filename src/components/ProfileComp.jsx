import {BsBell, BsChatLeftText} from 'react-icons/bs'
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../features/auth/authSlice"


const iconStyle=`text-light-400 w-4`
const ProfileComp = () => {
  const user = useSelector(selectCurrentUser)
  console.log("User:", user); 
  const firstName = user ? user.firstName : '';
  console.log("FirstName:", firstName);
  
  return (
    <div className='flex space-x-8 items-center'>
        <BsChatLeftText className={iconStyle}/>
        <BsBell className={iconStyle}/>
        <div className='border rounded-full border-dark-400'>
            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="image" className='w-8 h-8 rounded-full'/>
        </div>
        <p className='text-white'>{firstName}</p>
    </div>
  )
}

export default ProfileComp