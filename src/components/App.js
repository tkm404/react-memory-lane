import React from 'react';
import Header from 'header';
import { BrowswerRouter as Router, Routes, Route } from "react-router-dom";
import DreamControl from './DreamControl';

// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='' />
        <Route path='/' element={<DreamControl />} />
      </Routes>
    </Router>


  );
}

export default App;
