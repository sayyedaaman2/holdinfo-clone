import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

import ThemeContextWrapper from "./components/ThemeContextWrapper.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </Provider>
  </React.StrictMode>
);
