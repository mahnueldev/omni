import { FiMoreVertical } from 'react-icons/fi';
import PropTypes from 'prop-types';

const CourseList = ({ img, imgName, title, date }) => {
  return (
    <section className='bg-dark-300 flex justify-between items-center gap-4 m-2 py-2 px-2 rounded-lg'>
      <div className='w-14 h-14 rounded-lg'>
        <img src={img} className='flex rounded-lg' alt={imgName} />
      </div>
      <div>
        <h2 className='text-light-300 text-base'>{title}</h2>
        <p className='text-light-500 text-sm'>{date}</p>
      </div>
      <div className='ml-12'>
        <FiMoreVertical />
      </div>
    </section>
  );
};

export default CourseList;

CourseList.propTypes = {
  img: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
