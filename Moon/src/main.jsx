import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { enrutador } from './router/enrutador'
import "./stylos/colores.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(enrutador)} />
  </React.StrictMode>
);
