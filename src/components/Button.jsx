import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const buttonStyle =`rounded-lg bg-blue-200 text-light-100 text-sm px-4 py-2 hover:bg-blue-100 `
const Button = ({ text, href, to }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonStyle}>
        {text}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonStyle}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonStyle}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
