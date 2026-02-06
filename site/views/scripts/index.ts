import '../styles/main.scss';
import './icons.js';
import './navigation.js';

function initializeFeatherIcons(): void {
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

document.addEventListener('DOMContentLoaded', initializeFeatherIcons);

if (import.meta.hot) {
  import.meta.hot.accept();
}
