import React from 'react';
import './footer.css';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className="footer-container" id='contact'>
        <div className="footer">
          <div className="footer__logo">
            <h2 className='logo'>JOYKARA</h2>
            <div className="footer__social">
              <a href="https://twitter.com/"><FaTwitter color='white' size={20} /></a>
              <a href="https://www.instagram.com/"><FaInstagram color='white' size={23} /></a>
              <a href="https://www.youtube.com/"><FaYoutube color='white' size={25} /></a>
            </div>
          </div>
          <div className="footer__contact">
            <h3>CONTACT INFO</h3>
            <p>+254705080821</p>
            <p><FiMail /> joykarani1@gmail.com</p>
          </div>
          <div className="footer__links">
            <h3>QUICK LINKS</h3>
            <a href="/">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#stacks">Stacks</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </div>
  )
}

export default Footer