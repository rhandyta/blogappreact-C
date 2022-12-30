import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between px-8 h-12 items-center bg-sky-400 text-white">
            <Link to="/">
                <h1 className="text-xl font-semibold uppercase">MyBlog</h1>
            </Link>
            <div className="flex w-40 justify-around">
                <NavLink to="/">Home</NavLink>
                <NavLink to="add-post">Post</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
