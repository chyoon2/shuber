import React from 'react';
import {Button, Form, Container} from "react-bootstrap";
 
const SignOut = () => (
  <Container>
  <Form>
    <Form.Group>
      <Form.Control type="text" name="email" placeholder="Email" />
    </Form.Group>
    <Form.Group>
      <Form.Control type="password" name="password" placeholder="Password"/>
    </Form.Group>
      <Button variant="primary" type="submit">Sign up</Button>
  </Form>
  <p>Don't have an account? <em>hilarious</em></p>
  </Container>
);
export default SignOut;