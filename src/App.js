import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import CV from './components/CV';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import FrontPage from './components/FrontPage';

const App = () => {
  return (
    <Router>
       <div>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
