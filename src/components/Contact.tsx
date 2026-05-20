import { Reveal } from './Reveal';
import styles from './Contact.module.css';

const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/seu-usuario' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/seu-perfil' },
  { name: 'Twitter', url: 'https://twitter.com/seu-usuario' },
];

const ArrowOut = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export function Contact() {
  return (
    <section className={styles.contact} id="contato">
      <div className="container">
        <Reveal>
          <div className={styles.sectionHead}>
            <span className={styles.num}>03 —</span>
            <h2 className={styles.title}>
              Vamos <em>conversar</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.inner}>
            <h3 className={styles.heading}>
              Tem uma <em>ideia</em>
              <br />
              em mente?
            </h3>
            <a href="mailto:seu@email.com" className={styles.email}>
              seu@email.com
            </a>

            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                  <ArrowOut />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
