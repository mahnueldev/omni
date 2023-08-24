import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Register, NotFound } from '../src/pages';
import { Omni } from './route';

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          
          {/* App Route */}
          <Route path='/*' element={<Omni />}>
            {/* Nested routes */}
          </Route>
          
          {/* Add the NotFound route at the end */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
