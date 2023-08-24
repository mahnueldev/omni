import PropTypes from 'prop-types';

const allowedMarginVerticalClasses = [
    'mt-0', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5', 'mt-6', 'mt-7', 'mt-8', 'mt-9', 'mt-10',
    'mb-0', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5', 'mb-6', 'mb-7', 'mb-8', 'mb-9', 'mb-10'
  ];

  const allowedMarginHorizontalClasses = [
    'ml-0', 'ml-1', 'ml-2', 'ml-3', 'ml-4', 'ml-5', 'ml-6', 'ml-7', 'ml-8', 'ml-9', 'ml-10', 
    'mr-0', 'mr-1', 'mr-2', 'mr-3', 'mr-4', 'mr-5', 'mr-6', 'mr-7', 'mr-8', 'mr-9', 'mr-10'
  ];
  
const Spacer = ({marginVertical, marginHorizontal}) => {
    const isValidVerticalMargin = allowedMarginVerticalClasses.includes(marginVertical);
    const isValidHorizontalMargin = allowedMarginHorizontalClasses.includes(marginHorizontal);

    const spacerStyle = `
    ${isValidVerticalMargin ? marginVertical + ' ' : ''}
    ${isValidHorizontalMargin ? marginHorizontal + ' ' : ''}
  `;
  

  return (
    <div className={spacerStyle}></div>
  )
}

Spacer.propTypes = {
    
    marginVertical: PropTypes.oneOf(allowedMarginVerticalClasses),
    marginHorizontal: PropTypes.oneOf(allowedMarginHorizontalClasses),
    
  };

export default Spacer