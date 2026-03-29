import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Hero() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const ref = useIntersectionObserver();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.contentCol}>

          <div ref={ref} className={`fade-up-element ${styles.terminalCard}`}>
            <div className={styles.terminalHeader}>
              <div className={styles.macDot} style={{ backgroundColor: '#ff5f56' }}></div>
              <div className={styles.macDot} style={{ backgroundColor: '#ffbd2e' }}></div>
              <div className={styles.macDot} style={{ backgroundColor: '#27c93f' }}></div>
              <span className={styles.terminalTitle}>developer.js</span>
            </div>
            <div className={styles.terminalBody}>
              <p><span className={styles.keyword}>const</span> developer <span className={styles.operator}>=</span> {'{'}</p>
              <p className={styles.indent}>name: <span className={styles.string}>"Atharv Aggarwal"</span>,</p>
              <p className={styles.indent}>role: <span className={styles.string}>"Full Stack Developer"</span>,</p>
              <p className={styles.indent}>passion: <span className={styles.string}>"AI & Scalable Web Apps"</span>,</p>
              <p className={styles.indent}>location: <span className={styles.string}>"New Delhi, India"</span></p>
              <p>{'};'}</p>
            </div>
          </div>

          <div ref={ref} className={`fade-up-element delay-100 ${styles.chipBadge}`}>
            <span className={styles.chipDot}></span>
            <span>Available for new projects</span>
          </div>

          <h1 ref={ref} className={`fade-up-element delay-200 ${styles.headline}`}>
            Crafting<br />
            <span className={styles.accentText}>AI-driven solutions</span>
          </h1>

          <p ref={ref} className={`fade-up-element delay-300 ${styles.subtext}`}>
            Full Stack Developer with experience in building responsive web applications.
            Currently pursuing CS from Scaler School of Technology and BITS Pilani.
          </p>

        </div>
      </div>
    </section>
  );
}
