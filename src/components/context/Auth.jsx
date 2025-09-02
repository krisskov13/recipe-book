import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.username === username)) {
      setError("Користувач з таким іменем вже існує");
      return false;
    }

    const newUser = { id: Date.now(), username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setError("");
    return true;
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!existingUser) {
      setError("Невірний логін або пароль");
      return false;
    }

    localStorage.setItem("user", JSON.stringify(existingUser));
    setUser(existingUser);
    setError("");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setError("");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
