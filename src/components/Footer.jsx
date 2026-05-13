import React from 'react';
import { FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Усі права захищені.</p>
      <div className="socials">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://t.me/YOUR_TELEGRAM" target="_blank" rel="noreferrer"><FaTelegram /></a>
        <a href="mailto:your.email@gmail.com"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;