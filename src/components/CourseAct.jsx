import CircleProgressBar from './CircleProgressBar';
import Spacer from './Spacer';

const CourseAct = () => {
  return (
    <section className=' p-6  bg-dark-200 rounded-lg'>
      <h2 className='text-light-100'>Course Activities</h2>
      <Spacer marginVertical='mb-10'/>
      <div className='w-full justify-center items-center'>
        <CircleProgressBar
          baseCol='#1F1E2C'
          barCol='#FF8100'
          size={150}
          value={50}
          barThickness={20}
          baseThickness={5}
          rounded='round'
        />
      </div>
    </section>
  );
};

export default CourseAct;
