import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/global.css";
import ContextProvider from "./store/context/ContextProvider";
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
