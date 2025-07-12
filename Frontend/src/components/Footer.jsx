import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Developed By Anmol Raj Srivastav</p>
        <p>Contact Us</p>
      </div>

      <div className="footer-links">
        <ul>
          <li>FAQ</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Help Center</li>
          <li>Cookie Preferences</li>
          <li>Legal Notice</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
