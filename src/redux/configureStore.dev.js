import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
const loggerMiddleware = createLogger();
import reducers from "./reducers/index";

function configureStoreDev(initialStatus) {
   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

   return createStore(
      reducers,
      initialStatus,
      composeEnhancers(applyMiddleware(thunk, loggerMiddleware, reduxImmutableStateInvariant()))
   );
}

export default configureStoreDev;
