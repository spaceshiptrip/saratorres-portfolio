// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <p>
        Here is my professional resume, highlighting my academic achievements, skills, and experiences in Environmental Biology.
      </p>
      <embed src="/path-to-your-resume.pdf" width="800px" height="2100px" />
      {/* Alternatively, you can list your resume details directly in HTML here */}
    </div>
  );
};

export default Resume;
