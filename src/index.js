import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css"; 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure you have App.js in your src folder
import "./index.css"; // If you have global styles, keep this

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
