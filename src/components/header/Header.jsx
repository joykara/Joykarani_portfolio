import React from 'react';
import './header.css';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ReactTyped from 'react-typed';
import blob from '../../assets/blobanimation.svg';

const Header = () => {
    return (
      <div className="header-container">
        <img src={blob} alt="" className='blob'/>
        <div className="header-title">
          <h1>Joy Karani</h1>
          <ReactTyped
            className="typed-text"
            strings={[
                      "I am a Frontend Developer",
                      "I'm a Backend Developer",
                      "I am a Full Stack Developer"
                    ]}
            typeSpeed={10}
            backSpeed={60}
            loop
          />
          <p>Freelancer providing web development and design services. I'm always eager to learn and adapt to new technologies and industry trends.</p>
          <div className="header-social-links">
            <a href="https://twitter.com/"><FaTwitter color='white' size={30} /></a>
            <a href="https://www.instagram.com/"><FaInstagram color='white' size={30} /></a>
            <a href="https://www.linkedin.com"><FaLinkedinIn color='#ffffff' size={30}/></a>
            <a href="https://www.youtube.com/"><FaGithub color='white' size={30} /></a>
          </div>
        </div>
        <div className="header-details">
        </div>
      </div>
  )
}

export default Header