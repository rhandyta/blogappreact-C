import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { addPost } from "./postSlice";

function AddPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const inputRef = useRef("");

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const navigator = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function submitHandler(e) {
        e.preventDefault();
        if (title && author && content) {
            dispatch(
                addPost({
                    id: nanoid(),
                    title,
                    author,
                    content,
                })
            );
            setTitle("");
            setContent("");
            navigator("/");
        } else {
            return alert("Field is required!");
        }
    }

    return (
        <div className="border shadow-md rounded-md p-5">
            <h1 className="font-semibold text-2xl mb-5">Add Post</h1>
            <form onSubmit={submitHandler}>
                <div className="flex flex-col mb-4">
                    <label htmlFor="title">Title</label>
                    <Input
                        ref={inputRef}
                        id="title"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="author">Author</label>
                    <select
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-400 transition duration-300 px-2 text-md"
                    >
                        <option>Select Author</option>
                        {users.map((user) => (
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="content">Content</label>
                    <Textarea
                        id="content"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    ></Textarea>
                </div>
                <button
                    type="submit"
                    className="bg-sky-500 shadow-sm rounded-md active:bg-sky-600 py-1 px-3 text-white mt-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddPost;
