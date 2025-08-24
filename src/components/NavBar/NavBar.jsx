import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useAuth } from "../context/Auth";

function NavBar() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🍽 Книга рецептів</h1>
      <nav>
        <div>
          {user ? (
            <div className={`${styles.links} ${styles.containerNav}`}>
              <Link to="/">Усі рецепти</Link>
              <Link to="/my-recipes">Мої рецепти</Link>
              <Link to="/add">Додати рецепт</Link>
              <button onClick={logout} className={styles.bntLogout}>
                Вийти
              </button>
            </div>
          ) : (
            <div className={`${styles.links} ${styles.containerNav}`}>
              <Link to="/login">Вхід</Link>
              <Link to="/register">Реєстрація</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
