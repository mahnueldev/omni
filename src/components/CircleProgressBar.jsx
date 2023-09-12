import PropTypes from 'prop-types';
const CircleProgressBar = ({
  value,
  size,
  baseCol,
  barCol,
  baseThickness,
  barThickness,
  rounded,
}) => {
  // Calculate the circumference and dash offset based on the percentage
  const circumference = 2 * Math.PI * (size / 2.3);
  const dashOffset = circumference - (value / 100) * circumference;

  // Define styles for the progress bar
  const progressBarStyles = {
    width: size,
    height: size,
  };

  const padding = 10; // Adjust the padding as needed
  const basecircle = {
    strokeWidth: baseThickness || 4,
    stroke: baseCol || 'grey',
    fill: 'transparent',
  };
  const barcircle = {
    strokeDasharray: circumference,
    strokeDashoffset: dashOffset,
    strokeWidth: barThickness || 8,
    stroke: barCol || 'blue',
    fill: 'transparent',
    strokeLinecap: rounded ? 'round' : 'butt',
  };

  return (
    <div className='flex items-center justify-center'>
      <svg
        className='transform -rotate-90 w-full h-full '
        style={progressBarStyles}
      >
        <circle
          className='text-grey-500'
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - padding} 
          style={basecircle}
        />
        <circle
          className='text-blue-200'
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - padding} 
          style={barcircle}
        />
      </svg>
      <span
        className='absolute text-5xl text-light-300'
        style={{ fontSize: '1.5rem' }} // Adjust font size as needed
      >
        {value}%
      </span>
    </div>
  );
};

export default CircleProgressBar;

CircleProgressBar.propTypes = {
    value:PropTypes.number,
    size:PropTypes.number,
    baseCol:PropTypes.string,
    barCol:PropTypes.string,
    baseThickness:PropTypes.number,
    barThickness:PropTypes.number,
    rounded:PropTypes.string,
   
  };
  