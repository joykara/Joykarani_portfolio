import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container" id='about-me'>
          <div className="about-title">
            <hr /><h2>ABOUT ME</h2>
          </div>
          <div className="about-details">
              <div className="about-details-left">
                  <h3>Who Am I?</h3>
                  <hr />
                  <p>I'm Joy Karani, passionate self-taught fullstack developer with a love for crafting clean, elegant, and user-friendly digital experiences and a background in Mathematics and Computer Science. I'm currently a student at <a href="https://www.jkuat.ac.ke/">Jomo Kenyatta University of Agriculture and Technology</a></p>
                  <p>What truly ignites my drive is the synergy between frontend and backend - the thrill of seamlessly connecting the dots to deliver holistic solutions. Whether it's refining user flows or diving deep into coding challenges, I'm always eager to learn and adapt to new technologies and industry trends.</p>
                  <button><a href="https://github.com/joykara">VIEW PROJECTS</a></button>
              </div>
          </div>
    </div>
  )
}

export default About