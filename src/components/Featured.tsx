import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { Reveal, staggerContainer, staggerItem } from './Reveal';
import styles from './Featured.module.css';

export function Featured() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className={styles.featured} id="projetos-destaque">
      <div className="container">
        <Reveal>
          <div className={styles.sectionHead}>
            <span className={styles.num}>02 —</span>
            <h2 className={styles.title}>
              Projetos em <em>destaque</em>
            </h2>
          </div>
        </Reveal>

        <motion.div
          className={styles.list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          variants={staggerContainer}
        >
          {featured.map((p, i) => (
            <motion.div key={p.id} variants={staggerItem}>
              <Link to={`/projetos/${p.id}`} className={styles.item}>
                <span className={styles.itemNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.itemTitle}>{p.title}</h3>
                <span className={styles.itemYear}>{p.year}</span>
                <span className={styles.arrow}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className={styles.cta}>
            <Link to="/projetos" className={styles.btn}>
              Ver todos os projetos
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
