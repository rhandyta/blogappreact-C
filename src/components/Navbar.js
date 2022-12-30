import React from "react";

function Navbar() {
    return (
        <nav className="flex justify-between px-8 h-12 items-center bg-sky-400 text-white">
            <h1 className="text-xl font-semibold uppercase">MyBlog</h1>
            <div className="flex w-40 justify-around">
                <a href="#">Home</a>
                <a href="#">Post</a>
            </div>
        </nav>
    );
}

export default Navbar;
