import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom';
import {Button, Form} from "react-bootstrap";
import '../../login.css';
import * as ROLES from '../../constants/roles';

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
  isAdmin: false,
  error: null,
}

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;
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
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set(
          {
            username,
            email,
            roles,
          },
          { merge: true },
        );
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({[event.target.name]: event.target.value})};

  onChangeCheckbox = event => {
      this.setState({ [event.target.name]: event.target.checked });
    };

  render() {
    const { username, email, passwordOne, passwordTwo, isAdmin, error, } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
            <img src={require("./../../images/cropped logo.png")} id="icon" alt="User Icon" />
            </div>
            <div>
                <input name="username" value={username} onChange={this.onChange} type="text" placeholder="User Name" />
                <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
                <input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password" />
                <input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password" />
                <label>
                  Admin:
                  <input
                    name="isAdmin"
                    type="checkbox"
                    checked={isAdmin}
                    onChange={this.onChangeCheckbox}
                  />
                </label>
                
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