import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.status}>Disponível para projetos</div>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Construindo
          <br />
          ideias <em>digitais</em>
          <br />
          com propósito.
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Sou um(a) desenvolvedor(a) focado(a) em criar produtos digitais que unem design
          refinado e código limpo. Atualmente baseado(a) no Brasil.
        </motion.p>

        <motion.div
          className={styles.meta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.metaItem}>
            <span className="label">Função</span>
            <span className="value">Full-Stack Developer</span>
          </div>
          <div className={styles.metaItem}>
            <span className="label">Localização</span>
            <span className="value">Campinas, BR</span>
          </div>
          <div className={styles.metaItem}>
            <span className="label">Foco</span>
            <span className="value">Web &amp; Mobile</span>
          </div>
        </motion.div>
      </div>
      <div className={styles.scrollIndicator}>Scroll</div>
    </section>
  );
}
