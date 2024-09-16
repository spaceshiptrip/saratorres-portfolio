// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <p>
        Here is my professional resume, highlighting my academic achievements, skills, and experiences in Environmental Biology.
      </p>
      <embed src={`${process.env.PUBLIC_URL}/assets/resume.pdf`} width="800px" height="2100px" />
      {/* Example of correct link if you are manually specifying paths */}
      <a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

