import { combineReducers } from "redux";
import Eventdata from "./Eventreducer";
import Citydata from "./Cityreducer";
import Allusers from "./Allusers";
const Reducers = combineReducers({ Eventdata, Citydata, Allusers });

export default Reducers;
