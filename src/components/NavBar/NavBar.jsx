import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>🍽 My Recipes</div>
      <div className={styles.links}>
        <Link to="/">Головна сторінка</Link>
        <Link to="/add">Додати рецепт</Link>
      </div>
    </nav>
  );
}

export default NavBar;
