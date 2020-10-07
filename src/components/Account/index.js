import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
 
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <h1>Account: {authUser.uid}</h1>
        <h1>Account: {authUser.username}</h1>
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);