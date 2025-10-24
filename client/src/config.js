// API Configuration
export const API_CONFIG = {
  // For development
  development: {
    API_URL: 'http://localhost:5001'
  },
  // For production - you'll need to update this with your actual backend URL
  production: {
    API_URL: process.env.REACT_APP_API_URL || 'https://YOUR-BACKEND-URL.railway.app'
  }
};

// Get current environment
const isDevelopment = process.env.NODE_ENV === 'development';

// Export the appropriate config
export const API_BASE_URL = isDevelopment 
  ? API_CONFIG.development.API_URL 
  : API_CONFIG.production.API_URL;

console.log('API Base URL:', API_BASE_URL);
console.log('Environment:', process.env.NODE_ENV);
console.log('Is Development:', isDevelopment);
