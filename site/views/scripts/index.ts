// Entry point for client-side assets
// Import styles
import '../styles/main.scss';

// Import the feather icons library
import './icons.js';

// Import navigation functionality
import './navigation.js';

// Declare feather as a global variable (from icons.js)
declare const feather: {
  replace: () => void;
};

// Declare module.hot for HMR
declare const module: {
  hot?: {
    accept: () => void;
  };
};

// Initialize feather icons on page load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
});

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
