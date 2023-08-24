// import { SideBar } from "../layouts"
import Oops from '../assets/svg/oops.svg';
import { Spacer } from '../components';

const Overview = () => {
  return (
    <>
    <Spacer marginVertical="mt-10"  />
    <main className='flex justify-center items-center container h-full mt-64  bg-white-100 '>
    <div className='flex-col justify-center  w-50'>
    <img src={Oops} alt="Oops" className="w-40 opacity-25 ml-10"/>
    <Spacer marginVertical="mt-2"  />
    <p className='text-dark-400 '>Content not available for this page</p>
</div>
    </main>
  

</>

  )
}

export default Overview