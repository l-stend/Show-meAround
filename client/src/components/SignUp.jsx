import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {};
  return (
    <>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Log in
      </div>
    </>
  );
};

export default SignUp;
