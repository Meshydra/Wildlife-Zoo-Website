import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Footer from './components/footer'


function App() {
  return (
    <>
      <Router>      
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' exact Component={Services} />
          <Route path='/SignUp' exact Component={SignUp} />
          <Route path='/products' exact Component={Products} />
        </Routes>          
        <Footer />      
      </Router>
    </>
  );
}

export default App;
