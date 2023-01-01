import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./users/userSlice";

const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
});

export default rootReducer;
