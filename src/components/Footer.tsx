import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {new Date().getFullYear()} Enzo Turcovic</span>
        <span>Feito à mão, com café</span>
      </div>
    </footer>
  );
}
