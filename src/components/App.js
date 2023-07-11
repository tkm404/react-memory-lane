import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DreamControl from './DreamControl';
import SignIn from "./SignIn";

// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<DreamControl />} />
      </Routes>
    </Router>


  );
}

export default App;
