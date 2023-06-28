import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

const rootElement = document.getElementById('root');

// create root react 18
const root = createRoot(rootElement);
root.render(<App />);