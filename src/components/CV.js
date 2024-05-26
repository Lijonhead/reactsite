import React from 'react';
import cvData from './data.json';
import '../App.css';

const CV = () => {
  return (
    <main>
      <h1>My CV</h1>
      <section>
        <h2>Education</h2>
        {cvData.education.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      <section>
        <h2>Work Experience</h2>
        {cvData.workExperience.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
    </main>
  );
};

export default CV;
