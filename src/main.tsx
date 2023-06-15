import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { AuthProvider } from './context/useAuth';
import './index.css';
import { QueryClientProvider } from 'react-query';
import queryClient from './config/reactQuery';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
