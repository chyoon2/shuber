import React from 'react';
import {withAuthorization} from '../Session';
import './../../landing.css';

const Home = () => (
  <div>
    <p>Home</p>
    <img src={require("./../../images/cropped logo.png")} id="icon" className="center" alt="User Icon" />
  </div>
);
 
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);