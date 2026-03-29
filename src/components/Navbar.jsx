import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Apply the Dark Ember theme on load
    document.documentElement.setAttribute('data-theme', 'obsidian');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gmailTemplate = "mailto:aggarwal.atharv15@gmail.com?subject=Collaborate&body=Hi Atharv, I saw your portfolio and would like to connect!";

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.avatarAbsolute}></div>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            {/* Nav content placeholder */}
          </div>

          <ul className={styles.navLinks}>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>

          <div className={styles.socialIcons}>
            <a href="https://github.com/Atharv1507" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/atharv-aggarwal-180277379" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaLinkedin size={20} />
            </a>
            <a href={gmailTemplate} className={styles.iconLink}>
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
