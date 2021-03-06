import '../../login.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Button, Form } from "react-bootstrap";

const SignInPage = () => (
  <div>
    <br></br>
    <SignInForm />
    {/* <SignUpLink /> */}
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (

      <Form onSubmit={this.onSubmit}>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
            <img src={require("./../../images/cropped logo.png")} id="icon" alt="User Icon" />
            </div>
            <div>
              <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
              <input name="password" value={password} onChange={this.onChange} type="password" placeholder="Password" />
              <p></p>
              <Button disabled={isInvalid} type="submit">Sign In</Button>
              <p></p>
            </div>
            <div id="formFooter">
              <p>Forgot Password?</p>
              <SignUpLink />
            </div>
          </div>
        </div>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };