import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <div className="footer-container">
      <a
        href="https://www.linkedin.com/in/ashley-liu-093521217/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/ashlxyliu"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaGithub />
      </a>
      <p>© 2024 Ashley Liu. All rights reserved.</p>
    </div>

  );
}

export default Footer;
