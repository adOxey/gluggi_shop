import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./project/App";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
