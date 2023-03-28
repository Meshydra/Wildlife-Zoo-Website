import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Animals from './components/pages/Animals';
import Merch from './components/pages/Merch';
import Footer from './components/footer'


function App() {
  return (
    <>
      <Router>      
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/merch' exact Component={Merch} />
          <Route path='/SignUp' exact Component={SignUp} />
          <Route path='/animals' exact Component={Animals} />
        </Routes>          
        <Footer />      
      </Router>
    </>
  );
}

export default App;
