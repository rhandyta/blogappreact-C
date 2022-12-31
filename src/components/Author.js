import React from "react";
import { useSelector } from "react-redux";

function Author({ userId }) {
    const users = useSelector((state) => state.users);
    const user = users.find((user) => user.id == userId);
    return (
        <span className="underline hover:cursor-pointer">
            {user ? user.name : "User unknow"}
        </span>
    );
}

export default Author;
