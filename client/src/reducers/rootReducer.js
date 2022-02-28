import { combineReducers } from "redux";

import { itemsReducer } from "../redux/itemsReducer";



export const rootReducer = combineReducers({
    itemsReducer,
})