// This service connects to your Node.js Backend.
// Use `VITE_API_URL` in the frontend env to point to your backend.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";

// 1. Register a new user (Email/Password)
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// 2. Login with Email/Password
export const loginWithEmail = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    // Save to local storage for persistence
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// 3. Login with Google
export const loginWithGoogle = async (token, role) => {
  try {
    const response = await fetch(`${API_URL}/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, role }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Google login failed");
    }

    // Save to local storage
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// 4. Logout
export const logoutUser = () => {
  localStorage.removeItem("user");
};