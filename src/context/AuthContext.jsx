import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Do not auto-login from localStorage — require explicit login/signup
  const [loading, setLoading] = useState(false);

  // Function to save user data after login
  const login = (userData) => {
    // Persist user locally but do NOT auto-apply on app start
    try { localStorage.setItem("user", JSON.stringify(userData)); } catch (e) { /* ignore */ }
    setUser(userData);
  };

  // Function to clear user data on logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // Optional: Redirect to login page
    window.location.href = "/login"; 
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;