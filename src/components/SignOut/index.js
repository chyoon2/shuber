import React from 'react';
import {Button, Form, Container} from "react-bootstrap";
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (

  <Button type="button" variant= "dark" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);