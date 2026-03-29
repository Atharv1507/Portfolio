import React from 'react';
import styles from './SkillsServices.module.css';
import { SectionHeading } from './SectionHeading';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Layout, Server, Wand2, Database, ChartPie } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend & UI',
    icon: <Layout size={32} className={styles.icon} />,
    skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Tailwind CSS'],
    delay: ''
  },
  {
    title: 'Backend & Data',
    icon: <Server size={32} className={styles.icon} />,
    skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'FastAPI'],
    delay: 'delay-100'
  },
  {
    title: 'Tools & Cloud',
    icon: <Database size={32} className={styles.icon} />,
    skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'Supabase', 'Selenium', 'Docker',],
    delay: 'delay-200'
  },
  {
    title: 'Data Science',

    icon: <ChartPie size={32} className={styles.icon} />,
    skills: ['Numpy', 'Pandas', 'Web Scraping', 'AI Agents', 'Pydantic'],
    delay: 'delay-300'
  }
];

export function SkillsServices() {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading text="Skills & Languages" />

        <p ref={ref} className={`fade-up-element ${styles.subheading}`}>
          A comprehensive toolkit designed to build fast, scalable, and responsive applications.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              ref={ref}
              className={`fade-up-element ${category.delay} ${styles.card}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {category.icon}
                </div>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>

              <div className={styles.chipContainer}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.chip}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
