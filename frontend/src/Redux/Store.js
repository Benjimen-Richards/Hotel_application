import { createStore, applyMiddleware } from "redux";

import promiseMiddleware from "redux-promise";
import Reducers from "./Reducers/Reducers";

const Store = createStore(Reducers, applyMiddleware(promiseMiddleware));
export default Store;
