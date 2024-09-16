// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

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
    </div>
  );
};

export default Home;
