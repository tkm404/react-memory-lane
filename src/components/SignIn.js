import React, { useState } from "react";
import { auth } from './../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function SignIn(){
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);


  function signUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`Thanks for signing up to share your dreams, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up. Please try again: ${error.message}`)
      });
  }

  function signIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}`)
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
      <h1>Sign Up</h1>
      {signUpSuccess}
      <form onSubmit={signUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

      <h1>Sign In</h1>
      {signInSuccess}
      <form onSubmit={signIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
      <h1>Sign Out</h1>
      {signOutSuccess}
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
    
    // Something to do with scope possibly, bootstrap reformatting breaks it!

    // <Container> 
    // <React.Fragment>
    //     <Row>
    //       <Col xs={6}>
    //       <h1>Sign Up</h1>
    //         <Form>
    //         {signUpSuccess}
    //           <Form.Group className="mb-3" onSubmit={signUp}>
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control 
    //             type='text'
    //             name='email'
    //             placeholder='email' />
    //           </Form.Group>
    //           <Form.Group className="mb-3">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type='password'
    //             name='password'
    //             placeholder='Password' />
    //           </Form.Group> 
    //           <Button variant="primary" size="sm" type='submit'>Sign up</Button>
    //         </Form>
    //       </Col>
    //     </Row>

    //     <Row>
    //       <Col xs={6}>
    //       <h1>Sign In</h1>
    //       <Form>
    //       {signInSuccess}
    //         <Form.Group className="mb-3" onSubmit={signIn}>
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control
    //             type='text'
    //             name='signinEmail'
    //             placeholder='email' />
    //           </Form.Group>
    //           <Form.Group className="mb-3">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type='password'
    //             name='signinPassword'
    //             placeholder='Password' />
    //           </Form.Group>
    //           <Button variant="primary" size="sm" type='submit'>Sign in</Button>
    //         </Form>
    //         </Col>
    //       </Row>

    //       <h1>Sign Out</h1>
    //       {signOutSuccess}
    //       <Button variant="primary" size="sm" onClick={doSignOut}>Sign out</Button>
      
    //   </React.Fragment>
    //   </Container>

  );
}

export default SignIn;

