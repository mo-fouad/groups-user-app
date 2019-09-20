import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import "./scss/app.scss";
import App from "./components/app";

const store = configureStore();

render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
   document.getElementById("app")
);
