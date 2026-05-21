import { Reveal } from './Reveal';
import styles from './About.module.css';

const SKILLS = [
  { name: 'JavaScript', level: '★★★★★' },
  { name: 'TypeScript', level: '★★★★☆' },
  { name: 'React', level: '★★★★★' },
  { name: 'Node.js', level: '★★★★☆' },
  { name: 'Python', level: '★★★★☆' },
  { name: 'PostgreSQL', level: '★★★☆☆' },
  { name: 'Docker', level: '★★★☆☆' },
  { name: 'Git', level: '★★★★★' },
];

export function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className="container">
        <Reveal>
          <div className={styles.sectionHead}>
            <span className={styles.num}>01 —</span>
            <h2 className={styles.title}>
              Sobre <em>mim</em>
            </h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <Reveal>
            <aside className={styles.sidebar}>
              <div className={styles.avatar}>
                <img
                  src="/images/profile.jpeg"
                  alt="Enzo Turcovic"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className={styles.tags}>
                <span className={styles.tag}>Desenvolvedor</span>
                <span className={styles.tag}>Brasil</span>
                <span className={styles.tag}>2025</span>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.content}>
              <p className={styles.lead}>
                Trabalho com desenvolvimento de software há alguns anos, com foco em criar
                interfaces que combinam usabilidade, performance e estética.
              </p>
              <p>
                Comecei minha jornada na programação por curiosidade e logo descobri que
                transformar ideias em produtos funcionais é o que me move. Hoje, divido meu
                tempo entre projetos pessoais, freelances e estudos contínuos.
              </p>
              <p>
                Acredito que o melhor código é o que ninguém precisa explicar, e que o
                melhor design é o que desaparece para deixar a experiência fluir.
              </p>

              <div className={styles.skills}>
                <h4>Stack &amp; Ferramentas</h4>
                <div className={styles.skillsGrid}>
                  {SKILLS.map((s) => (
                    <div key={s.name} className={styles.skill}>
                      {s.name} <span>{s.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
