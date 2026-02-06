import '../styles/main.scss';
import './icons.js';
import './navigation.js';

function initializeFeatherIcons(): void {
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

function setupServerRestartReload(): void {
  let serverWasDisconnected = false;
  let disconnectMessageShown = false;
  const HMR_ENDPOINT = '/__webpack_hmr';
  
  const connectionMonitor = new EventSource(HMR_ENDPOINT);
  
  connectionMonitor.onerror = () => {
    serverWasDisconnected = true;
    if (!disconnectMessageShown) {
      console.log('[HMR] Connection lost, waiting for server...');
      disconnectMessageShown = true;
    }
  };
  
  connectionMonitor.onopen = () => {
    if (serverWasDisconnected) {
      console.log('[HMR] Server reconnected, reloading page...');
      window.location.reload();
    }
  };
  
  const closeConnectionMonitor = () => connectionMonitor.close();
  
  window.addEventListener('beforeunload', closeConnectionMonitor);
  module.hot?.dispose(closeConnectionMonitor);
}

document.addEventListener('DOMContentLoaded', initializeFeatherIcons);

if (module.hot) {
  module.hot.accept();
  setupServerRestartReload();
}
