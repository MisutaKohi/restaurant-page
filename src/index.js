import './styles.css';
import renderNavbar from './components/navbar.js';
import renderHomepage from './webpages/home.js';

renderNavbar();

renderHomepage();

/* Are we in a development or production environment? */
console.log(process.env.NODE_ENV); 