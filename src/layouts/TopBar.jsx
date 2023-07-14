import { SearchBar } from '../components';

const TopBar = () => {
  return (
    <div className='bg-dark-200 fixed top-0 w-full h-16 ml-64 flex items-center'>
      <div className='pl-4'>
        <SearchBar />
      </div>
    </div>
  );
};

export default TopBar;
