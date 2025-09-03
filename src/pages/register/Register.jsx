import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/Auth";
import { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  const { register, error, setError } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError("");
    setError("");

    if (password !== confirm) {
      setLocalError("Паролі не співпадають");
      return;
    }

    if (password.length < 6) {
      setLocalError("Пароль має містити мінімум 6 символів");
      return;
    }

    const success = register(username, password);

    if (success) {
      setUsername("");
      setPassword("");
      setConfirm("");
      navigate("/");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Реєстрація</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>
          <input
            type="text"
            placeholder="Ім'я"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className={styles.inputWrapper}>
          <label>
            <input
              type="password"
              placeholder="Підтвердьте пароль"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            {localError && (
              <p className={styles.error}>{localError || "\u00A0"}</p>
            )}
            {error && <p className={styles.error}>{error || "\u00A0"}</p>}
          </label>
        </div>
        <button type="submit">Створити обліковий запис</button>
      </form>
    </div>
  );
}

export default Register;
