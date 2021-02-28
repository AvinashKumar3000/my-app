import { combineReducers } from "redux";
import { HomeMainNavReducer, HomeSubNavReducer } from "./Home";
import { ChatSubNavReducer} from "./Chat";
import { StatusSubNavReducer } from "./Status";
import { ManageSubNavReducer } from "./Manage";
const allReducer = combineReducers({ HomeMainNavReducer, HomeSubNavReducer, ChatSubNavReducer, StatusSubNavReducer, ManageSubNavReducer })

export default allReducer;