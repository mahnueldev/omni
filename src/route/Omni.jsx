import { Route, Routes } from 'react-router-dom';
import { Overview, Courses } from '../pages';
import { SideBar, TopBar } from '../layouts';
import { AppLayout } from '../route';

const webScreen = 'lg:ml-60 ';
const tabScreen = 'lg:ml-0 ';
const mobileScreen = 'sm:ml-0 ';

const Omni = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex'>
        <SideBar />
        <div className={`${webScreen} ${tabScreen} ${mobileScreen}flex-1`}>
          <TopBar />
          <div className='m-4'>
            <Routes>
              {/* Main App Routes */}
              <Route path='/' element={<AppLayout />}>
                <Route index element={<Overview />} />
                <Route path='courses' element={<Courses />} />
                {/* Additional main app routes */}
              </Route>
            
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Omni;
