// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <p>
        Here is my professional resume, highlighting my academic achievements, skills, and experiences in Environmental Biology.
      </p>
      <div style={{ position: 'relative', paddingBottom: '100%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#f0f0f0' }}>
        <iframe
          src={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          title="Resume PDF"
        />
      </div>
      {/* Example of correct link if you are manually specifying paths */}
      <a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

