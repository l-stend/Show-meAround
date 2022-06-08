import { Container } from 'react-bootstrap';
import './App.css';
import { SignUp } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <h2>🐋 Fraseddha 🐋</h2>
      <Container className='d-flex align-items-center justify-content-center'>
        <SignUp />
      </Container>
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
