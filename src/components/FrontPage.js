

import React from 'react';
import frontPageImage from './images/lion.png'; 
import './FrontPage.css';

const FrontPage = () => {
  return (
    <main>
      
      <h1>Welcome to My CV Website</h1>
      
      <img src={frontPageImage} alt="Front Page Image" className="front-page-image" />
      <p>My name is Hugo leijonhufvud and I hope you enjoy your stay here!</p>
    </main>
  );
};

export default FrontPage;
