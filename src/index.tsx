import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.querySelector('#root');
if (!rootElement) {
  throw new Error('Could not find root element');
} else {
  const root = createRoot(rootElement);
  root.render(<App />);
}
