

import React from 'react';
import '../App.css'; 
import profileImage from './images/profile.jpg'


const About = () => {
  return (
    
    <main>
      <h1>About Me</h1>
      <img src={profileImage} alt="Profile Picture" />
      <p>My name is Hugo Leijonhufvud and I was born in 1999. I am studying at the Chas Academy in Stockholm, which I started in August 2023, where the goal is for me to become a full-stack developer.</p>
      
    </main>
    
    
  );
};

export default About;
