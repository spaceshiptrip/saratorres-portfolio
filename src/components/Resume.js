// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <p>
        Here is my professional resume, highlighting my academic achievements, skills, and experiences in Environmental Biology.
      </p>
      <div className="resume-container">
        <embed src={`${process.env.PUBLIC_URL}/assets/resume.pdf`} className="resume-pdf" />
      </div>
      <a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

