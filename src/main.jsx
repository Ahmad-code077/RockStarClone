import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppProvider } from './context/context.jsx';
import { GamesProvider } from './context/GamesContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <GamesProvider>
        <App />
      </GamesProvider>
    </AppProvider>
  </StrictMode>
);
