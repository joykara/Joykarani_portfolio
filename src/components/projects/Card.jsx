import React from 'react';

const Card = ({ project }) => {
  const { title, imgSrc, description, code, link } = project;

  return (
    <div className='project-card-content'>
      <img src={imgSrc} alt={title} />
      <div className="project-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <button title='View Code'>{code && <a href={code} target="_blank" rel="noopener noreferrer">View Code</a>}</button>
          <button title='View Site'>{link && <a href={link} target="_blank" rel="noopener noreferrer">Visit Site</a>} </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
