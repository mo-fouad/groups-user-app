import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

function configureStore(initialStatus) {
   return createStore(reducers, initialStatus, applyMiddleware(thunk));
}

export default configureStore;
