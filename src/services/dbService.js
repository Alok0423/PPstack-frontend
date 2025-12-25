// This service now sends data to your Node.js + MongoDB Backend
// Instead of talking directly to Firebase

const API_URL = "http://localhost:5000/api";

// Function to save contact form messages or enrollments
export const saveContactMessage = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit form");
    }

    return data;
  } catch (error) {
    console.error("Error in dbService:", error);
    throw error;
  }
};

// You can add more DB functions here later (e.g., fetchCourses)