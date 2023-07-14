import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Overview, Courses } from '../src/pages/index';
import { SideBar, TopBar } from './layouts';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <div className="flex">
          <SideBar />
          <div className="flex-1">
            <TopBar />
            <div className="ml-12">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="courses" element={<Courses />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
