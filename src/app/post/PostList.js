import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";

function PostList() {
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            {posts.map((post) => (
                <Card key={post.id}>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Content author={post.author} timestamp={post.date}>
                        {post.content.length > 100
                            ? `${post.content.substr(0, 100)}...`
                            : post.content}
                    </Card.Content>
                </Card>
            ))}
        </div>
    );
}

export default PostList;
