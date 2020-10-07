import React from 'react';
import './../../landing.css';
import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

const Home = () => (
  <div>
    <p>Home</p>
    <img src={require("./../../images/cropped logo.png")} id="icon" className="center" alt="User Icon" />
  </div>
);
 
const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Home);