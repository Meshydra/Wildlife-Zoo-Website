import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>      
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>        
      </Router>
    </>
  );
}

export default App;
