import 'regenerator-runtime';
import './components/app-bar';
import './components/hero';
import './components/custom-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/form.css';
import '../styles/like.css';
import '../styles/spinner.css';
import App from './views/App';
// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './global/config';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
  toggle: document.querySelector('#dark-mode'),
  currentTheme: localStorage.getItem('theme'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
