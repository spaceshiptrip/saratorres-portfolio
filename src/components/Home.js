// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Environmental Biology Portfolio</h1>
      <p>
        Hello! I am a college student passionate about Environmental Biology. I am currently seeking an internship opportunity to apply my skills and knowledge in this field.
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/resume">View My Resume</Link>
          </li>
          <li>
            <Link to="/papers">Read My Papers</Link>
          </li>
        </ul>
      </nav>
      <img src={`${process.env.PUBLIC_URL}/assets/IMG_0618.jpeg`} alt="Environmental Biology" className="responsive-image" />
    </div>
  );
};

export default Home;


