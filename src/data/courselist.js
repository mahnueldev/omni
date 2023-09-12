import { v4 as uuidv4 } from 'uuid';
import OverviewImage from '../assets/images/pixel.png';
const CourseListing = [
    {
        id: uuidv4(),
        img: OverviewImage,
        title: '3D Animation Course',
        date: formatDate(new Date()), // Format the current date
        to: '#', // Add a link URL if needed
      },
    {
        id: uuidv4(),
        img: OverviewImage,
        title: '3D Animation Course',
        date: formatDate(new Date()), // Format the current date
        to: '#', // Add a link URL if needed
      },
    {
        id: uuidv4(),
        img: OverviewImage,
        title: '3D Animation Course',
        date: formatDate(new Date()), // Format the current date
        to: '#', // Add a link URL if needed
      },
    
  ];
  const CompletedLx = [
    {
        id: uuidv4(),
        title: '3D Animation Course',
        value: 84,
      },
    {
        id: uuidv4(),
        title: 'Machine Lerning Lesson',
        value: 34,
      },
    {
        id: uuidv4(),
        title: 'Handling UI/UX Design',
        value: 48,
      },
    
  ];


  
  

  function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (1-12) and pad with 0 if needed
    const day = String(date.getDate()).padStart(2, '0'); // Get day of the month and pad with 0 if needed
    return `${month}/${day}`;
  }
  
  export {CourseListing, CompletedLx};

  