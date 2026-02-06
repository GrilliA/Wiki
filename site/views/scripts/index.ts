// Entry point for client-side assets
// Import styles
import '../styles/main.scss';

// Import the feather icons library
import './icons.js';

// Import navigation functionality
import './navigation.js';

// Initialize feather icons on page load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
});

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  
  // Listen for custom reload events from the server (e.g., Pug file changes)
  // webpack-hot-middleware uses EventSource for communication
  // Using dynamic import to ensure it's only loaded in development mode
  import('webpack-hot-middleware/client').then((hotClient) => {
    hotClient.subscribe((message) => {
      if (message.action === 'reload') {
        console.log('[HMR] Reloading page due to template change...');
        window.location.reload();
      }
    });
  });
}
