// Import stylesheets
import './style.css';
import { style2 } from './styles.css';
import { injectStyles } from 'redgin';

// Inject global styles
const globalStyles = [
  style2
];

injectStyles.push(...globalStyles);

// Dynamically load component
import('./counter')
  .catch((err) => console.error('Failed to load component:', err));
