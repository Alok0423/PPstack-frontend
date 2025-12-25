// src/services/authService.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${BASE_URL}/api/auth`;

// 1. Register
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Registration failed");
  return data;
};

// 2. Email login
export const loginWithEmail = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed");

  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

// 3. Google login
export const loginWithGoogle = async (token, role) => {
  const response = await fetch(`${API_URL}/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ token, role }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Google login failed");

  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

// 4. Logout
export const logoutUser = () => {
  localStorage.removeItem("user");
};
