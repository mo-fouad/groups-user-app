import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStoreDev from "./redux/configureStore.dev";
import "./scss/app.scss";
import App from "./components/app";

const store = configureStoreDev();

render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
   document.getElementById("app")
);
