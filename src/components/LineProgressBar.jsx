import PropTypes from 'prop-types';

const LineProgressBar = ({ title, value, baseCol, barCol, barWidth, baseWidth, space }) => {
    const progressBarStyle = `${barCol}   rounded-md h-${barWidth || 'full'}`;
    const progressBarStyleUnderlay = `${baseCol} rounded-md h-${baseWidth || 'full'}`;
    const progressBarContainerStyle = `relative w-full h-${space}`;
  
    return (
      <section className='w-full '>
        <p className='text-sm text-light-300'>{title}</p>
        <div className={progressBarContainerStyle}>
          <div
            className={`${progressBarStyle} ${barCol}`}
            style={{ width: `${value}%`, position: 'absolute', zIndex: '1' }}
          ></div>
          <div
            className={progressBarStyleUnderlay}
            style={{ width: '100%', position: 'absolute', zIndex: '0' }}
          ></div>
        </div>
      </section>
    );
  };
  
  export default LineProgressBar;

  LineProgressBar.propTypes = {
    title:PropTypes.string,
    value:PropTypes.number,
    barCol:PropTypes.string,
    baseCol:PropTypes.string,
    baseWidth:PropTypes.string,
    barWidth:PropTypes.string,
    space:PropTypes.string,
    
   
  };