import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useAuth } from "../context/Auth";

function NavBar() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.headerBackground}>
      <div className={styles.header}>
        <h1 className={styles.logo}>🍽 Книга рецептів</h1>
        <nav>
          <div>
            {user ? (
              <div className={`${styles.links} ${styles.containerNav}`}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                >
                  Усі рецепти
                </NavLink>
                <NavLink
                  to="/my-recipes"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                >
                  Мої рецепти
                </NavLink>
                <NavLink
                  to="/add"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                >
                  Додати рецепт
                </NavLink>
                <button onClick={logout} className={styles.bntLogout}>
                  Вийти
                </button>
              </div>
            ) : (
              <div className={`${styles.links} ${styles.containerNav}`}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                >
                  Усі рецепти
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                >
                  Вхід
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                >
                  Реєстрація
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
