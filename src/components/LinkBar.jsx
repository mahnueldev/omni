
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkBar = ({ icon, text, notification, active, link }) => {
  const notificationCircle = notification ? (
    <div className="bg-orange-100 text-light-100 w-6 h-6 flex items-center justify-center rounded-full">
      <span className='text-sm'>{notification}</span>
    </div>
  ) : null;

  const linkClasses = `text-base ${active ? 'text-light-100' : 'text-dark-400'}`;
  const iconClasses = `text-xl ${active ? 'text-light-100' : 'text-dark-400'}`;
  const containerClasses = `text-dark-100 flex justify-items-center items-center px-4 py-3.5 rounded-xl max-w-xs space-x-2  w-52 ${active ? 'bg-blue-200' : ''}`;

  return (
    <div className='mx-6'>
    <Link to={link} className={containerClasses}>
      <div className={iconClasses}>{icon}</div>
      <p className={linkClasses}>{text}</p>
      {notificationCircle}
    </Link>
    </div>
  );
};

LinkBar.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  notification: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  link: PropTypes.string.isRequired,
};

export default LinkBar;
