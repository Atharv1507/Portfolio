import React from 'react';
import styles from './FeaturedProjects.module.css';
import { SectionHeading } from './SectionHeading';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Knowledge Auditor',
    category: 'Fullstack / LLM / Gemini API',
    desc: 'AI-powered bookmark management using Gemini API and Supabase. Automatically maps bookmarks to projects based on context.',
    year: '2026',
    image: '/knowledge-auditor.png',
    link: '#',
    delay: ''
  },
  {
    id: 2,
    title: 'Scaler Marketplace',
    category: 'Fullstack / Express / SQL',
    desc: 'A full-stack student marketplace with user auth, product listings, and a PostgreSQL backend schema.',
    year: '2026',
    image: '/marketpalce.png',
    link: '#',
    delay: 'delay-100'
  },
  {
    id: 3,
    title: 'Remember Me',
    category: 'Express / Web-Sockets / React',
    desc: 'A 1v1 Memory Game where two players can play together in real-time.',
    year: '2026',
    image: '/rememberme.png',
    link: 'https://memory-game-production-5d61.up.railway.app',
    delay: 'delay-200'
  },
  {
    id: 4,
    title: 'Coming Soon..',
    category: '',
    desc: '',
    year: '',
    image: '',
    link: '#',
    delay: 'delay-200'
  }
];

export function FeaturedProjects() {
  const ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading text="Featured Projects" />

        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              ref={ref}
              className={`fade-up-element ${project.delay} ${styles.card}`}
            >
              <div className={styles.imageWrapper}>
                {project.image && <img src={project.image} alt={project.title} className={styles.image} />}
                <div className={styles.arrowWrapper}>
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.projectInfo}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <span className={styles.category}>{project.category}</span>
                  <p className={styles.description}>{project.desc}</p>
                </div>
                <div className={styles.sideInfo}>
                  <span className={styles.yearBadge}>{project.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.viewMoreWrapper}>
          <a
            href="https://github.com/Atharv1507"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewMore}
          >
            View More on GitHub
            <ArrowUpRight size={16} style={{ marginLeft: '0.4rem' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
