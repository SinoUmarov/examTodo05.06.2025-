import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
