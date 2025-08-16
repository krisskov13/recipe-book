import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <p className={styles.title}>Контакти:</p>
        <a href="mailto:moirecepty@gmail.com">moirecepty@gmail.com</a>
        <a href="tel:+380123456789">+38 012 34 56 789</a>
      </div>
      <div className={styles.copy}>
        <p>
          © 2025 Мої Рецепти <br />
          Усі права захищено
        </p>
      </div>
    </footer>
  );
}

export default Footer;
