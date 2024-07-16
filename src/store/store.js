import { applyMiddleware ,legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/reducer";
import logger from "redux-logger";


export const myStore = createStore(reducer,applyMiddleware(logger));