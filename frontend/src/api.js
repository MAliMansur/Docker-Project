import axios from 'axios';

// When running inside Docker/browser, we call the backend via host mapping or relative/direct proxy.
// For direct browser access in this lab setup, pointing to port 5000 on the host IP works, 
// or if served dynamically, use window.location.hostname.
const API_BASE_URL = `http://${window.location.hostname}:5000/api`;

export const getApiStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching API status:", error);
    return { message: "Backend is unreachable" };
  }
};

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
};
