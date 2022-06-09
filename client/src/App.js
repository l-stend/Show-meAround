import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { SignUp } from './components';
import { Dashboard, ProtectedRoute, Landing } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <h2>🐋 Fraseddha 🐋</h2>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Container className='d-flex align-items-center justify-content-center'>
        <SignUp />
        <Dashboard />
      </Container>
      <ToastContainer position='top-center' /> */}
    </>
  );
}

export default App;
