import React from 'react';
import './footer.css';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className="footer-container" id='contact'>
        <div className="footer">
          <div className="footer__logo">
            <h2 className='logo'>JOYKARA</h2>
            <div className="footer__social">
              <a href="https://twitter.com/kokkuri_sa" title="Twitter"><FaTwitter color='violet' size={20} /></a>
              <a href="https://www.linkedin.com/in/joy-k-aba15b206/" title="LinkedIn"><FaLinkedinIn color='violet' size={20} /></a>
              <a href="https://github.com/joykara" title="Github"><FaGithub color='violet' size={20} /></a>
            </div>
          </div>
          <div className="footer__contact">
            <h2>CONTACT INFO</h2>
            <p><FiMail /><a href="mailto:joykarani1@gmail.com">joykarani1@gmail.com</a></p>
          </div>
          <ul className="footer-links">
              <li><a href="/#about-me">ABOUT ME</a></li>
              <li><a href="/#stacks">STACKS</a></li>
              <li><a href="/projects">PROJECTS</a></li>
              <li><a href="/#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
  )
}

export default Footer