"use client";
import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create context
const AuthContext = createContext();

// 2️⃣ Export useAuth hook
export const useAuth = () => useContext(AuthContext);

// 3️⃣ Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // For now: simulate localStorage login
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
