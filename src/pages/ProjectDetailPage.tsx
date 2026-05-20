import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '@/data/projects';
import { Reveal } from '@/components/Reveal';
import styles from './ProjectDetailPage.module.css';

const ArrowOut = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  // Scroll para o topo ao mudar de projeto
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.notFound}>
            <h1>Projeto não encontrado</h1>
            <p>O projeto que você procura não existe ou foi removido.</p>
            <Link to="/projetos" className={styles.btn}>
              ← Voltar para projetos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const idx = PROJECTS.findIndex((p) => p.id === id);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  // Última palavra do título em itálico (igual no HTML original)
  const titleParts = project.title.split(' ');
  const lastWord = titleParts.pop();
  const firstWords = titleParts.join(' ');

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Reveal>
          <Link to="/projetos" className={styles.backLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Voltar para projetos
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <header className={styles.header}>
            <span className={`eyebrow ${styles.category}`}>— {project.category}</span>
            <h1 className={styles.title}>
              {firstWords && `${firstWords} `}
              <em>{lastWord}</em>
            </h1>
            <p className={styles.lead}>{project.summary}</p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <div className="label">Ano</div>
                <div className="value">{project.year}</div>
              </div>
              {project.role && (
                <div className={styles.infoItem}>
                  <div className="label">Função</div>
                  <div className="value">{project.role}</div>
                </div>
              )}
              {project.duration && (
                <div className={styles.infoItem}>
                  <div className="label">Duração</div>
                  <div className="value">{project.duration}</div>
                </div>
              )}
              {project.client && (
                <div className={styles.infoItem}>
                  <div className="label">Cliente</div>
                  <div className="value">{project.client}</div>
                </div>
              )}
              <div className={styles.infoItem}>
                <div className="label">Stack</div>
                <div className="value">{project.tags.join(', ')}</div>
              </div>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.heroImage}>
            {project.cover?.startsWith('http') ? (
              <img src={project.cover} alt={project.title} />
            ) : (
              project.cover || '◆'
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </Reveal>

        {(project.links?.live || project.links?.github) && (
          <Reveal delay={0.2}>
            <div className={`${styles.body} ${styles.links}`}>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  Ver projeto ao vivo <ArrowOut />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btn}
                >
                  Código no GitHub <ArrowOut />
                </a>
              )}
            </div>
          </Reveal>
        )}

        {(prev || next) && (
          <Reveal delay={0.25}>
            <nav className={styles.nav}>
              {prev ? (
                <Link to={`/projetos/${prev.id}`} className={styles.navItem}>
                  <div className="direction">← Anterior</div>
                  <div className="name">{prev.title}</div>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to={`/projetos/${next.id}`}
                  className={`${styles.navItem} ${styles.next}`}
                >
                  <div className="direction">Próximo →</div>
                  <div className="name">{next.title}</div>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </Reveal>
        )}
      </div>
    </div>
  );
}
