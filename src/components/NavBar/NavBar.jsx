import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🍽 Книга рецептів</h1>
      <nav>
        <div className={styles.links}>
          <Link to="/add">Додати рецепт</Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
