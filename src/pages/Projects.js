import React from 'react';
import '../components/projects/projects.css';
import Card from '../components/projects/Card.jsx';
import projectList from '../components/projects/projectList.js';
import { Navbar, Contact } from '../components/index.js';


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
        <div className='project-cards'>
          {projectList.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>;
      </div>
      <Contact />
    </>
  )
}

export default Projects
