import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root';
import ReactDOM from "react-dom/client";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);