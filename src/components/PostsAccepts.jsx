import React from "react";
import PostAuthor from "./PostAuthor";
import ReactionsButton from "./ReactionsButton";
import TimeAgo from "./TimeAgo";

const PostsAccepts = ({ post, userId }) => {
  let id;
  if (post.userId === userId) {
    id = userId;
  }
  return (
    <ul style={{ padding: 10 }}>
      <li style={{ backgroundColor: "gray", padding: 10 }}>
        <h2>Title: {post.title}</h2>
        <p>Content: {post.body}</p>
        <p>Author ID: {post.userId}</p>
        <PostAuthor userId={id} />
        <TimeAgo timestamp={post.date} />
        <ReactionsButton post={post} />
      </li>
    </ul>
  );
};

export default PostsAccepts;
