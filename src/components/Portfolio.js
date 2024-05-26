import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Lijonhead/repos');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Portfolio</h1>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div>
          {projects.map(project => (
            <div className="project" key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Portfolio;
