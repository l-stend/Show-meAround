import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './components';
import { ToastContainer } from 'react-toastify';
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
  TourDetails,
  LocalChats,
  ChatSystem,
} from './pages';

function App() {
  const { user } = useSelector((store) => store.user);
  return (
    <>
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
            {user?.type === 'local' ? (
              <Route index element={<AllTours />} />
            ) : (
              <Route index element={<AllTours />} />
            )}
            <Route path='/profile' element={<LocalProfile />} />
            <Route path='/chats' element={<ChatSystem />}>
              <Route path='/chats/:chatId' element={<TravelerChats />} />
            </Route>
            <Route path='/createTour' element={<CreateTour />} />
            <Route path='/tourDetails/:tourId' element={<TourDetails />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
