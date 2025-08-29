import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useAuth } from "../context/Auth";
import { useState } from "react";

function NavBar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.headerBackground}>
      <div className={styles.header}>
        <button
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        <h1 className={styles.logo}>🍽 Книга рецептів</h1>
        {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <div>
            {user ? (
              <div className={`${styles.links} ${styles.containerNav}`}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                  onClick={closeMenu}
                >
                  Усі рецепти
                </NavLink>
                <NavLink
                  to="/my-recipes"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                  onClick={closeMenu}
                >
                  Мої рецепти
                </NavLink>
                <NavLink
                  to="/add"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                  onClick={closeMenu}
                >
                  Додати рецепт
                </NavLink>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className={styles.bntLogout}
                >
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
                  onClick={closeMenu}
                >
                  Усі рецепти
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                  onClick={closeMenu}
                >
                  Вхід
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? `${styles.activeLink}` : undefined
                  }
                  onClick={closeMenu}
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
