import { Button, LinkBar, Spacer } from "../components";
import { Menu, Account } from '../data/sideMenu';
import { BiHomeAlt, BiMessageSquareDots } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import { AiOutlinePieChart} from 'react-icons/ai';
import { MdOutlineAnalytics } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import logo from '../assets/svg/omni.svg'
import invite from '../assets/svg/bookad.svg'

const icons = {
  BiHomeAlt: <BiHomeAlt />,
  BsBook: <BsBook />,
  AiOutlinePieChart: <AiOutlinePieChart/>,
  MdOutlineAnalytics: <MdOutlineAnalytics />,
  BiMessageSquareDots: <BiMessageSquareDots/>,
  FiSettings: <FiSettings/>,
  };
  const linkHeads =`text-light-400 text-base flex justify-self-start mx-8 mt-8`

const SideBar = () => {
  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  return (
    <div className="bg-dark-200 h-screen fixed z-10">
      <div className="flex items-center space-x-2 mt-6 mx-8 text-light-100 font-medium">
      <img src={logo} alt="Logo" className="w-6"/>
      <h2>Omni</h2>
    </div>
        <div className={linkHeads}>Menu</div>
       {Menu.map((item) => (
        
        <LinkBar
          key={item.id}
          icon={icons[item.icon]}
          text={item.label}
          active={isActiveLink(item.to)}
          link={item.to}
          
        />
      ))}
      <div className={linkHeads}>Account</div>
      {Account.map((item) => (
        <LinkBar
          key={item.id}
          icon={icons[item.icon]}
          text={item.label}
          active={item.active}
          notification={item.notification}
          link={item.to}
          
        />
      ))}
       <div className="flex-col  space-x-2 mt-12 mx-16 text-light-100 font-medium">
      <img src={invite} alt="Logo" className="w-24"/>
      <Spacer marginVertical="mt-2"/>
      <Button text="Invite" href="https://www.creond.com/"/>
    </div>
    </div>
    
  );
};

export default SideBar;
