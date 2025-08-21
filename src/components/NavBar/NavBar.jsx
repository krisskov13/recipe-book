import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useAuth } from "../context/Auth";

function NavBar() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🍽 Книга рецептів</h1>
      <nav>
        <div className={styles.links}>
          {user && <Link to="/add">Додати рецепт</Link>}
        </div>
        <div>
          {user ? (
            <button onClick={logout}>Вийти</button>
          ) : (
            <div>
              <Link to="/login">Вхід</Link>
              <Link to="./register">Реєстрація</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
