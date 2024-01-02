import React from 'react';
import '../components/projects/projects.css';
import Card from '../components/projects/Card.jsx';
import { Navbar, Contact, Footer } from '../components/index.js';


const Projects = () => {

  return (
    <>
      <Navbar />
      <div className="projects-container" id='projects'>
        <div className="projects-title">
          <h3>What I've Done</h3>
          <hr />
          <p>Here are some of my projects:</p>
        </div>
        <Card />
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default Projects
