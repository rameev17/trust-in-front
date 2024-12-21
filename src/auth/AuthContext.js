import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON?.parse(localStorage.getItem("user")) ?? null
  );

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const resetPassword = (email) => {
    return axios.post(`http://78.40.108.115:8000/api/password/reset/`, {
      email,
    });
  };
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, resetPassword, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
