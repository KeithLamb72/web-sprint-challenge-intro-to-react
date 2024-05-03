import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/reset.css';
import './styles/styles.css';

const domNode = document.getElementById('root');
if (!domNode) {
  console.error('Root element not found');
} else {
  const root = createRoot(domNode);
  root.render(<App />);
}
