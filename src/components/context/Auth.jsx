import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.username === username)) {
      throw new Error("Користувач з таким іменем вже існує");
    }

    const newUser = { username, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!existingUser) {
      throw new Error("Невірний логін вбо пароль");
    }

    localStorage.setItem("user", JSON.stringify(existingUser));
    setUser(existingUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Auth.Provider value={{ user, register, login, logout }}>
      {children}
    </Auth.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default Auth;
