import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="844117262575-p5eve8k96cj0seqnn0ppfgpv0a777v4h.apps.googleusercontent.com">
      {" "}
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
