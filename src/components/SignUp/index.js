import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom';
import {Button, Form, Container} from "react-bootstrap";
import '../../login.css';
 
const SignUpPage = () => (
  <div>
    <br></br>
    <SignUpForm />
  </div>
);
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}
const SignUpLink = () => (
  <p align="center">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);

      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  }
 
  onChange = event => {
    this.setState({[event.target.name]: event.target.value})};
 
  render() {
    const { username, email, passwordOne, passwordTwo, error, } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src= "./logocropped.png" />
            </div>
            <div>
        
              
                <input name="username" value={username} onChange={this.onChange} type="text" placeholder="Full Name" />
                <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
                <input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password" />
                <input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password" />

                
                <p></p>
                <Button disabled={isInvalid} type="submit">Sign Up</Button>
                <p></p>
                </div>
            <div id="formFooter">
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>
        {error && <p>{error.message}</p>}
      </Form>
        
    );
  }
}


const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };