import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//imports all neccesarry files to be used by queryClient and reactDom


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// This code initializes and renders the application by setting up a QueryClient with default options for React Query to handle data fetching in suspense mode, then provides this client to the app via QueryClientProvider to enable query caching and DevTools support for debugging, all wrapped in React.StrictMode for additional runtime checks.