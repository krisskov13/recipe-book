import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/Auth";
import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const { login, error, setError } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const success = login(username, password);

    if (success) {
      setUsername("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Вхід</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>
          <input
            type="text"
            placeholder="Ім'я"
            value={username}
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <div className={styles.inputWrapper}>
          <label>
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className={styles.error}>{error || "\u00A0"}</p>}
          </label>
        </div>
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}

export default Login;
