import React from "react";
import { useSelector } from "react-redux";

function PostList() {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
