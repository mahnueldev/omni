import {BsBell, BsChatLeftText} from 'react-icons/bs'

const iconStyle=`text-light-400 w-4`
const ProfileComp = () => {
  return (
    <div className='flex space-x-8 items-center'>
        <BsChatLeftText className={iconStyle}/>
        <BsBell className={iconStyle}/>
        <div className='border rounded-full border-dark-400'>
            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="image" className='w-8 h-8 rounded-full'/>
        </div>
    </div>
  )
}

export default ProfileComp