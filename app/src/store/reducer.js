import { combineReducers } from "redux";
import messagesStore from "../modules/messages/reducer";

const appReducer = combineReducers({ messagesStore });

export default appReducer;
