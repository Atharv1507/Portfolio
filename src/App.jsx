import React, { useState, useEffect } from 'react';
import './index.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsServices } from './components/SkillsServices';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WorkExperience } from './components/WorkExperience';

function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Background Bulb Gradient */}
      <div className="bulb-gradient"></div>

      {/* Fun Playful Cursor */}
      <div 
        className="custom-cursor"
        style={{
          top: mousePos.y,
          left: mousePos.x,
          width: isHovering ? '48px' : '20px',
          height: isHovering ? '48px' : '20px',
          backgroundColor: isHovering ? 'rgba(14, 165, 233, 0.1)' : 'var(--accent)',
          border: isHovering ? '2px solid var(--accent)' : '2px solid transparent',
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <SkillsServices />
        <FeaturedProjects />
        <WorkExperience />
      </main>
    </div>
  );
}

export default App;
