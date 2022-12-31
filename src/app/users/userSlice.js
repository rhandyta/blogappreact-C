import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "Author 1" },
    { id: 2, name: "Author 2" },
];

const users = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export default users.reducer;
