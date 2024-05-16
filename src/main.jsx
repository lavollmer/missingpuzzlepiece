import React from "react";
import 'tailwindcss/tailwind.css';
import './index.css';
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
require('dotenv').config();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
