import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DreamControl from './DreamControl';
import SignIn from "./SignIn";
import RemInfo from './RemInfo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<DreamControl />} />
        <Route path='/rem-info' element={<RemInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
