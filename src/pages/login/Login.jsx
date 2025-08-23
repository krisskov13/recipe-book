import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/Auth";
import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Заповніть всі поля");
      return;
    }

    login({ username });
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Вхід</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Ім'я"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}

export default Login;
