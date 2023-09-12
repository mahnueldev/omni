import { SearchBar, ProfileComp } from '../components';

const TopBar = () => {
  return (
    <div className='bg-dark-200 sticky top-0 w-full h-16 flex items-center z-10'>
      <div className='pl-4 flex justify-between items-center container'>
        <SearchBar />
        <ProfileComp/>
      </div>
    </div>
  );
};

export default TopBar;
