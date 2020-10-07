import React from 'react';
import {withAuthorization} from '../Session';

const Home = () => (
  <div>
    <p>the Home page is accessible by every signed in User.</p>
    <img src={require("./../../images/cropped logo.png")} id="icon" alt="User Icon" />
  </div>
);
 
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);