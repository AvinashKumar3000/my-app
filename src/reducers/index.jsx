import { combineReducers } from "redux";
import { HomeMainNavReducer, HomeSubNavReducer } from "./Home";
import { ChatSubNavReducer} from "./Chat";
import { ManageSubNavReducer } from "./Manage";
const allReducer = combineReducers({ HomeMainNavReducer, HomeSubNavReducer, ChatSubNavReducer, ManageSubNavReducer })

export default allReducer;