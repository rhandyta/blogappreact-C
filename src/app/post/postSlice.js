import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "First Post",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos fuga ipsum voluptatum nihil recusandae nisi numquam, nulla beatae veniam quasi? Voluptas omnis excepturi iusto sequi in autem nesciunt vero!",
    },
    {
        id: 2,
        title: "Second Post",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, saepe.",
    },
    {
        id: 3,
        title: "Third Post",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati distinctio dignissimos, excepturi harum et!",
    },
];

const post = createSlice({
    name: "posts",
    initialState,
    reducers: {},
});

export default post.reducer;
