import React from 'react';
import styles from './WorkExperience.module.css';
import { SectionHeading } from './SectionHeading';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    role: "Technical Programme Developer",
    company: "NEXASSURE AI, New Delhi",
    date: "Apr 2026 – Present",
    desc: "● Architected AI-driven workflows utilizing Gemini API and OpenAI to automate internal research, reducing manual compliance processing time by over 40%.\n● Engineered Python-based web scrapers and extraction pipelines to automate data retrieval from legal portals, handling 1,000+ records with high accuracy and reliability.\n● Developed and deployed RESTful microservices using FastAPI, creating scalable automation tools and streamlining development",
    delay: "delay-100"
  },
  {
    role: "Development and Tech Mentor",
    company: "Cospire, Gurgaon",
    date: "Sep 2025 - Jan 2026",
    desc: "● Guided mentees in leveraging GenAI tools and establishing achievable development goals.\n● Defined a starting point and structured path for new and aspiring developers.\n● Provided constructive technical feedback on project presentations and code reviews to accelerate mentee growth",
    delay: "delay-100"
  },
  {
    role: "Frontend-Developer",
    company: "Bankim Creatives, New Delhi",
    date: "June 2025 - Nov 2025",
    desc: "●Developed and deployed a static responsive catalogue website, ensuring mobile-first compatibility across all devices.\n●Troubleshooted complex issues across front-end, back-end and CDN.\n●Utilized Git for version control and Github for, maintaining high source code integrity and deployment with customdomain.",
    delay: "delay-100"
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
                  <p className={styles.desc}>
                    {exp.desc.split('\n').map((line, i, arr) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
