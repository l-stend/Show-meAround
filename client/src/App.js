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
  MyTours,
  CreateTour,
  LocalProfile,
} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((store) => store.user);
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
            {user === 'local' ? (
              <Route index element={<AllTours />} />
            ) : (
              <Route index element={<MyTours />} />
            )}
            <Route path='/profile' element={<LocalProfile />} />
            <Route path='/chats' element={<TravelerChats />} />
            <Route path='/createTour' element={<CreateTour />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
