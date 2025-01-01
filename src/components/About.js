import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <img
        src="/Ashley.png"
        alt="Ashley Liu"
        className="about-image"
      />
      <div className="about-text">
        <h1>ABOUT</h1>
        <p>
          ASHLEY ENJOYS PERCEIVING THE WORLD THROUGH A CREATIVE LENS. SHE IS A COMPUTER SCIENCE MAJOR AT CORNELL AND HAS A PASSION FOR COMBINING TECHNOLOGY AND DESIGN TO CREATE SCALABLE SOLUTIONS. OUTSIDE OF HER PROFESSIONAL PURSUITS, ASHLEY ENJOYS PAINTING, RUNNING, AND SPENDING TIME WITH FAMILY AND FRIENDS. SHE IS BASED ON LONG ISLAND, NY, BUT OFTEN SPENDS TIME IN NEW YORK CITY AND ABROAD.
        </p>
      </div>
    </div>
  );
}

export default About;
