import { Activities, CourseAct, Spacer, Statistics } from '../components';

const webScreen = ' lg:flex lg:gap-4';
const tabScreen = 'lg:flex-row lg:flex ';
const mobileScreen = 'sm:flex sm:flex-col sm:gap-4 ';

const OverviewSplitLeft = () => {
  return (
    <main className=''>
        <div className='hover:scale-105 transition'>

      <Activities />
        </div>
      <Spacer marginVertical='mb-4' />
      <section className={`${webScreen} ${tabScreen} ${mobileScreen}`}>
        <div className='w-6/12 sm:w-full hover:scale-105 transition'>
          <Statistics />
        </div>
        <div className='lg:w-6/12 sm:w-full hover:scale-105 transition'>
          <CourseAct />
        </div>
      </section>
    </main>
  );
};

export default OverviewSplitLeft;
