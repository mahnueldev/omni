import { OverviewSplitLeft, OverviewSplitRight } from '../layouts';
// import { useGetUsersQuery } from '../features/user/userApiSlice';

const webScreen = 'lg:flex lg:flex-1 lg:gap-4';
const tabScreen = 'lg:flex-row ';
const mobileScreen = 'sm:flex sm:flex-col ';

const Overview = () => {
  
  return (
    <main>

      <section
        className={`${webScreen} ${tabScreen} ${mobileScreen} mx-4 my-6`}
      >
        <div className=' lg:flex-auto '>
          <OverviewSplitLeft />
        </div>
        <div className='lg:flex-auto'>
          <OverviewSplitRight />
        </div>
      </section>
    </main>
  );
};

export default Overview;
