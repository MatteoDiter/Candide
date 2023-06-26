import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

window.onload = function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
};