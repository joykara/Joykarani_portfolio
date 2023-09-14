import React from 'react';
import './header.css';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import blob from '../../assets/blobanimation.svg';
import TypewriterComponent from 'typewriter-effect';

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
                      "Backend Developer",
                      "Full Stack Developer"
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>Freelancer providing web development and design services. I'm always eager to learn and adapt to new technologies and industry trends.</p>
          <div className="header-social-links">
            <a href="https://twitter.com/kokkuri_sa"><FaTwitter color='black' size={30} /></a>
            <a href="https://www.instagram.com/"><FaInstagram color='black' size={30} /></a>
            <a href="https://www.linkedin.com/in/joy-k-aba15b206/"><FaLinkedinIn color='black' size={30} /></a>
            <a href="https://github.com/joykara"><FaGithub color='black' size={30} /></a>
          </div>
        </div>
        <div className="header-details">
        </div>
      </div>
  )
}

export default Header