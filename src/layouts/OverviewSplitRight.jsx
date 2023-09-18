import { Spacer } from '../components';
import CompletedCx from './CompletedCx';
import MyPlan from './MyPlan';

const OverviewSplitRight = () => {
  return (
    <div className='lg:mt-0 sm:mt-4 '>
      <div className='hover:scale-105 transition '>
        <MyPlan />
      </div>
      <Spacer marginVertical='mt-4' />
      <div className='hover:scale-105 transition'>
        <CompletedCx />
      </div>
    </div>
  );
};

export default OverviewSplitRight;
