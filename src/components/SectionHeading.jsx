import React from 'react';
import styles from './SectionHeading.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function SectionHeading({ text, className = '' }) {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <h2
      ref={ref}
      className={`fade-up-element ${styles.heading} ${className}`}
    >
      <span className={styles.accentDot}></span>
      {text}
    </h2>
  );
}
