import React from "react";
import { jsx } from "@emotion/react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store/storeProvider";
import { AppStore } from "./store/store";
import App from "./App";

ReactDOM.render(
  <StoreProvider value={new AppStore()}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
