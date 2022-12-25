import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';
import Homepage from './components/Homepage/Homepage';
import Category from './components/Categories/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'profile', element: <UserProfile /> },
      { path: '', element: <Homepage /> },
      { path: 'category/:categoryid', element: <Category /> },
    ],
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
