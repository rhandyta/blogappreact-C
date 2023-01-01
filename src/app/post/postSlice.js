import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const post = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addPost } = post.actions;

export default post.reducer;
