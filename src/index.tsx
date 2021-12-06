import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/Global.scss";
import App from "./components/app/App";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./config/Config";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
