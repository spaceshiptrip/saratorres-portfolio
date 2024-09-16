// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Papers from './components/Papers';
import './styles.css';

function App() {
  return (
    // Set the basename to match the subdirectory on GitHub Pages
    <Router basename="/sample-react-gh-host">
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/papers">Papers</Link></li>
              <li><a href="https://spaceshiptrip.github.io/sample-react-gh-host/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/papers" element={<Papers />} />
            {/* Catch-all route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

