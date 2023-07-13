import React, { useState } from "react";
import  {auth} from './../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SignIn(){
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [userDisplayName, setUserDisplayName] = useState("");

  function signUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
        displayName: event.target.displayName.value,
        })
        .then(() => {
        setUserDisplayName(event.target.displayName.value);
        setSignUpSuccess(`Thanks for signing up to share your dreams ${userDisplayName}, ${userCredential.user.email}!`);
        })
        .catch((error) => {
        setSignUpSuccess(`There was an error signing up. Please try again: ${error.message}`);
      })
    })
  }

  function signIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: auth.currentUser.displayName,
        })
        .then(() => {
          setUserDisplayName(auth.currentUser.displayName);
          setSignInSuccess(`Hey${userDisplayName}! You've successfully signed in as ${auth.currentUser.displayName}!`);
        }) 
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You've successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      <Container className="p-5">
        <Row>
          <Col>
            <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
            <h1>Sign Up</h1>
              {signUpSuccess && <p>{signUpSuccess}</p>}
              <Form onSubmit={signUp}>
              <Form.Floating className="mb-3">
              <Form.Control
                input
                type='text'
                name='displayName'
                placeholder='Display Name' />
                <label htmlFor="floatingInputCustom" className="text-black">Display Name</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
              <Form.Control
                input
                type='text'
                name='email'
                placeholder='email' />
                <label htmlFor="floatingInputCustom" className="text-black">Email address</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
              <Form.Control
                input
                type='password'
                name='password'
                placeholder='Password' />
                <label htmlFor="floatingInputCustom" className="text-black">Password</label>
                </Form.Floating>
                <button type='submit'>Sign up</button>
              </Form>
            </div>

            <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
              <h1>Sign In</h1>
              {signInSuccess && <p>{signInSuccess}</p>}
              <Form onSubmit={signIn}>
              <Form.Floating className="mb-3">
              <Form.Control
                input
                type='text'
                name='signinEmail'
                placeholder='email' />
                <label htmlFor="floatingInputCustom" className="text-black">Email address</label>
              </Form.Floating>
              
              <Form.Floating className="mb-3">
                <Form.Control
                  input
                  type='password'
                  name='signinPassword'
                  placeholder='Password' />
                  <label htmlFor="floatingInputCustom" className="text-black">Password</label>
                </Form.Floating>
                <button type='submit'>Sign in</button>
              </Form>
            </div>
            
            <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
              <h1>Sign Out</h1>
              <button onClick={doSignOut}>Sign out</button>
              <br />
              {signOutSuccess && <p>{signOutSuccess}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default SignIn;

