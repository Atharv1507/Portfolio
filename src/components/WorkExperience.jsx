import React from 'react';
import styles from './WorkExperience.module.css';
import { SectionHeading } from './SectionHeading';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    role: "Freelance Full stack Developer",
    company: "Bengaluru, India",
    date: "Jan 2026 – Present",
    desc: "Consulting with diverse clients to translate business requirements into functional, high-performance web solutions. Optimizing application architectures to enhance user experience.",
    delay: ""
  },
  {
    role: "Development and Tech Mentor",
    company: "Cospire, Gurgaon",
    date: "Sep 2025 - Jan 2026",
    desc: "Guided mentees in mastering full-stack concepts and structuring paths for new developers. Provided technical feedback on projects and code reviews.",
    delay: "delay-100"
  },
  {
    role: "Frontend-Developer",
    company: "Bankim Creatives, New Delhi",
    date: "June 2025 - Nov 2025",
    desc: "Developed and deployed a static responsive catalogue website. Troubleshooted complex front-end and CDN issues. Managed version control and deployments via GitHub.",
    delay: "delay-200"
  }
];

export function WorkExperience() {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading text="Experience" />

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} ref={ref} className={`fade-up-element ${exp.delay} ${styles.entry}`}>
              <div className={styles.leftCol}>
                <span className={styles.date}>{exp.date}</span>
              </div>
              <div className={styles.centerCol}>
                <div className={styles.dot}></div>
                {index !== experiences.length - 1 && <div className={styles.line}></div>}
              </div>
              <div className={styles.rightCol}>
                <div className={styles.card}>
                  <h4 className={styles.role}>{exp.role}</h4>
                  <div className={styles.company} data-date={exp.date}>{exp.company}</div>
                  <p className={styles.desc}>{exp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
