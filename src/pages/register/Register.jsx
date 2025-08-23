import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/Auth";
import { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !confirm) {
      setError("Заповніть всі поля");
      return;
    }

    if (password !== confirm) {
      setError("Паролі не співпадають");
      return;
    }

    register({ username });
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Реєстрація</h2>
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
        <input
          type="password"
          placeholder="Підтвердьте пароль"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit">Створити обліковий запис</button>
      </form>
    </div>
  );
}

export default Register;
