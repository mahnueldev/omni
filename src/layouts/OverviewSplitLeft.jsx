import { Activities, CourseAct, Spacer, Statistics } from '../components';

const webScreen = ' lg:flex lg:gap-4';
const tabScreen = 'lg:flex-row lg:flex ';
const mobileScreen = 'sm:flex sm:flex-col sm:gap-4 ';

const OverviewSplitLeft = () => {
  return (
    <main className=''>
      <Activities />
      <Spacer marginVertical='mb-4' />
      <section className={`${webScreen} ${tabScreen} ${mobileScreen}`}>
        <div className='w-6/12 sm:w-full'>
          <Statistics />
        </div>
        <div className='lg:w-4/12 sm:w-full'>
          <CourseAct />
        </div>
      </section>
    </main>
  );
};

export default OverviewSplitLeft;
