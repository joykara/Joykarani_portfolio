import React from 'react';
import projectList from './projectList';
import { Link } from 'react-router-dom';

const Card = () => {

  return (
    <div className='project-cards'>
    {projectList.map((project) => (
      <div className='project-card-content scale-up rounded-md'key={project.id}>
        <img src={project.imgSrc} alt={project.title} />
        <div className="project-card-info">
          <h3>{project.title}</h3>
          <p className='font-eb'>{project.description}</p>
          <div className="project-links">
            <Link to={project.code} target="_blank" rel="noopener noreferrer" className='rounded-sm'>View Code</Link>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='rounded-sm'>Visit Site</a>
          </div>
        </div>
      </div>
    ))}
  </div>

  );
};

export default Card;
