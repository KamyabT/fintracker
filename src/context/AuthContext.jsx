import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("token");
  });
  const [isLoading, setIsLoading] = useState(false);

  function login(userData, userToken) {
    setUser(userData);
    setToken(userToken);
    setIsAuthenticated(true);
    localStorage.setItem("token", userToken);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isLoading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
