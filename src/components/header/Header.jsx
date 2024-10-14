import React from 'react';
import './header.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import blob from '../../assets/blobanimation.svg';
import TypewriterComponent from 'typewriter-effect';
import CVFile from '../../assets/JoyKarani-CV.pdf'

const Header = () => {
  return (
    <div className="header-container">
      <img src={blob} alt="" className='blob'/>
      <div className="header-title">
        <h1>Joy Karani</h1>
        {/* use TypeWriterComponent */}
        <TypewriterComponent className="typed-text"
          options={{
            strings: [
                    "Frontend Developer",
                    "Backend Enthusiast",
                    "Full Stack Developer"
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <p>A passionate developer providing web development and design services. My enthusiasm for learning drives me to stay abreast of the latest technologies and industry trends</p>
        <div className="header-social-links">
          <a href="https://twitter.com/kokkuri_sa" target="_blank" rel="noopener noreferrer" title="Twitter"><FaTwitter color='black' size={30} /></a>
          <a href="https://www.linkedin.com/in/joy-k-aba15b206/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedinIn color='black' size={30} /></a>
          <a href="https://github.com/joykara" target="_blank" rel="noopener noreferrer" title="Github"><FaGithub color='black' size={30} /></a>
        </div>
      <div className="resume-box">
          <a href={CVFile} download><button>Download CV</button></a>
      </div>
      </div>
    </div>
  )
}

export default Header
