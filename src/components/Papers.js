// src/components/Papers.js
import React from 'react';

const Papers = () => {
  return (
    <div className="papers">
      <h1>My Research Papers</h1>
      <ul>
        <li>
          <a href="/assets/paper1.pdf" target="_blank" rel="noopener noreferrer">Paper Title 1</a>
          <p>A brief description of what this paper is about.</p>
        </li>
        <li>
          <a href="/assets/paper2.pdf" target="_blank" rel="noopener noreferrer">Paper Title 2</a>
          <p>A brief description of what this paper is about.</p>
        </li>
        {/* Add more papers as needed */}
      </ul>
    </div>
  );
};

export default Papers;

