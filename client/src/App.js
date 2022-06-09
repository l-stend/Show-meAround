import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { SignUp } from './components';
import {
  Dashboard,
  ProtectedRoute,
  Landing,
  ErrorPage,
  AllTours,
  TravelerProfile,
  TravelerChats,
} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <h2>🐋 Fraseddha 🐋</h2>

      <BrowserRouter>
        <Routes>
          <Route path='landing' element={<Landing />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* {pagine da cui si potrà accedere dalla shared dashboard} */}
            <Route index element={<AllTours />} />
            <Route path='/userProfile' element={<TravelerProfile />} />
            <Route path='/userChats' element={<TravelerChats />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
