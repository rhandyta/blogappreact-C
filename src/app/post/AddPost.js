import React, { useEffect, useRef } from "react";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
function AddPost() {
    const inputRef = useRef("");
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div className="border shadow-md rounded-md p-5">
            <h1 className="font-semibold text-2xl mb-5">Add Post</h1>
            <form>
                <div className="flex flex-col mb-4">
                    <label htmlFor="title">Title</label>
                    <Input ref={inputRef} id="title" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="author">Author</label>
                    <select
                        name=""
                        id=""
                        className="border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-400 transition duration-300 px-2 text-md"
                    >
                        <option value="penulis1">Author 1</option>
                        <option value="penulis1">Author 2</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="content">Content</label>
                    <Textarea id="content"></Textarea>
                </div>
                <button className="bg-sky-500 shadow-sm rounded-md active:bg-sky-600 py-1 px-3 text-white mt-2">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddPost;
