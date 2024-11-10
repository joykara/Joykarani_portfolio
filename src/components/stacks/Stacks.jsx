import React from 'react';
import './stacks.css';


const Stacks = () => {
  return (
      <div className="stacks-container" id='stacks'>
          <div className="stacks-title">
              <h3>Tech Stacks</h3>
              <hr />
              <p>I currently work with the following stacks;</p>
          </div>
          <div className="stacks-content">
                <div className="stacks-content-item">
                    <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt="html" />
                    <p>HTML5</p>
                </div>
                <div className="stacks-content-item">
                    <img src='https://img.shields.io/badge/css3-%2320232a.svg?style=for-the-badge&logo=css3&logoColor=white' alt="css3" />
                    <p>CSS3</p>
                </div>
                <div className="stacks-content-item">
                    <img src='https://img.shields.io/badge/javascript-%23E34F26.svg?style=for-the-badge&logo=javascript&logoColor=white' alt="javascript" />
                    <p>Javascript</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/tailwind-%23404d59.svg?style=for-the-badge&logo=tailwindcss&logoColor=blue" alt="tailwindcss" />
                    <p>Tailwind CSS</p>
                </div>
                <div className="stacks-content-item">
                    <img src='https://img.shields.io/badge/typescript-3670A0?style=for-the-badge&logo=typescript&logoColor=white' alt="typescript" />
                    <p>Typescript</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="python" />
                    <p>Python</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
                    <p>React</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/next-%2320232a.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="next" />
                    <p>Next</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
                    <p>MongoDB</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
                    <p>Node.js</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express" />
                    <p>Express.js</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/mysql-3670A0?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql" />
                    <p>MySQL</p>
                </div>
                <div className="stacks-content-item">
                    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=python&logoColor=ffdd54" alt="postgresql" />
                    <p>Postgresql</p>
                </div>
          </div>
    </div>
  )
}

export default Stacks

