import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS, CATEGORIES } from '@/data/projects';
import { Reveal } from '@/components/Reveal';
import styles from './ProjectsPage.module.css';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filtered = useMemo(() => {
    if (activeFilter === 'Todos') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <header className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className={`eyebrow ${styles.eyebrow}`}>— Trabalhos selecionados</span>
            <h1 className={styles.pageTitle}>
              Projetos &amp;<br />
              <em>experimentos</em>
            </h1>
            <p className={styles.pageDesc}>
              Uma seleção de trabalhos recentes — produtos comerciais, projetos pessoais e
              explorações técnicas. Cada um com um pouco de mim.
            </p>
          </Reveal>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.filters}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${
                    cat === activeFilter ? styles.filterBtnActive : ''
                  }`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div className={styles.grid} layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/projetos/${p.id}`} className={styles.card}>
                    <div className={styles.cardImage}>
                      {p.cover?.startsWith('http') ? (
                        <img src={p.cover} alt={p.title} />
                      ) : (
                        p.cover || '◆'
                      )}
                    </div>
                    <div className={styles.cardMeta}>
                      <span>{p.category}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardDesc}>{p.summary}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
