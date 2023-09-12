import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Register, NotFound } from '../src/pages';
import { Omni, AppLayout } from './route';
import RequireAuth from './features/auth/RequireAuth'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Router>
        <Routes>
        <Route  element={<AppLayout />}>
          {/* Authentication Routes */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          
          {/* App Route */}
          <Route element={<RequireAuth />}>
          <Route path='/*' element={<Omni />}/>
          </Route>         
          {/* Add the NotFound route at the end */}
          <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
