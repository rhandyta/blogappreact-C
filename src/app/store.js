import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./users/userSlice";

const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer,
    },
});

export default store;
