import { Container } from 'react-bootstrap';
import './App.css';
import { SignUp } from './components';

function App() {
  return (
    <>
      <h2>🐋 Fraseddha 🐋</h2>
      <Container className='d-flex align-items-center justify-content-center'>
        <SignUp />
      </Container>
    </>
  );
}

export default App;
