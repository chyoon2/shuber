import React from 'react';
import './../../styles/landing.css';
import { withAuthorization} from '../Session';
import Messages from '../Messages';
import { compose } from 'recompose';


const Home = () => (
  <div>
    <p>Home</p>
    <img src={require("./../../images/cropped logo.png")} id="icon" className="center" alt="User Icon" />
    <Messages />
  </div>
);
 
const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
)(Home);