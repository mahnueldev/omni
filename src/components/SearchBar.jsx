import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-md bg-dark-300 px-4 py-1.5">
      <FiSearch className="text-light-400 mr-1" />
      <input
        type="text"
        className="bg-transparent focus:outline-none w-full text-sm cursor-text text-light-200 placeholder-light-400"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
