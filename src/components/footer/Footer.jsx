import React from 'react';
import './footer.css';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className="footer-container" id='contact'>
        <div className="footer">
          <div className="footer__logo">
            <h2 className='logo'>JOYKARA</h2>
            <div className="footer__social">
              <a href="https://twitter.com/kokkuri_sa" title="social"><FaTwitter color='black' size={20} /></a>
              <a href="https://www.instagram.com/" title="social"><FaInstagram color='black' size={20} /></a>
              <a href="https://www.linkedin.com/in/joy-k-aba15b206/" title="social"><FaLinkedinIn color='black' size={20} /></a>
              <a href="https://github.com/joykara" title="social"><FaGithub color='black' size={20} /></a>
            </div>
          </div>
          <div className="footer__contact">
            <h3>CONTACT INFO</h3>
            <p>+254705080821</p>
            <p><FiMail /> joykarani1@gmail.com</p>
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