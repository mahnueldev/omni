import { SearchBar, ProfileComp } from '../components';

const TopBar = () => {
  return (
    <div className='bg-dark-200 fixed top-0 w-full h-16 ml-64 flex items-center'>
      <div className='pl-4 flex justify-between items-center container'>
        <SearchBar />
        <ProfileComp/>
      </div>
    </div>
  );
};

export default TopBar;
