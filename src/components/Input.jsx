import PropTypes from 'prop-types';

const Input = (props) => {
    const { label, type, placeholder, error } = props;
  
    return (
      <div className='mb-4 '>
        {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
        <input
          type={type || "text" || "password"}
          placeholder={placeholder || ""}
          className="w-full px-3 bg-transparent py-2 placeholder-dark-400 border border-dark-400 rounded-lg focus:outline-none focus:ring focus:border-blue-100 text-light-300"
        />
        <p className='text-red-400'>{error}</p>
      </div>
    );
  };
  
  Input.propTypes = {
    label: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  
  };
  export default Input;
  