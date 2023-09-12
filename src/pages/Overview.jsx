import { OverviewSplitLeft, OverviewSplitRight } from '../layouts';

const webScreen = 'lg:flex lg:flex-1 lg:gap-4';
const tabScreen = 'lg:flex-row ';
const mobileScreen = 'sm:flex sm:flex-col ';
const Overview = () => {
  return (
    <section className={`${webScreen} ${tabScreen} ${mobileScreen} `}>
      <div className=' lg:flex-1 '>
        <OverviewSplitLeft />
      </div>
      <div className=''>
        <OverviewSplitRight />
      </div>
    </section>
  );
};

export default Overview;
