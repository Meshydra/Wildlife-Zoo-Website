import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>      
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
        
    </Router>
    </>
  );
}

export default App;
