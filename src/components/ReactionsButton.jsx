import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../store/features/posts/postsSlice";

const ReactionsButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionEmoji = {
    like: "👍",
    wow: "🤩",
    heart: "💓",
    angry: "😡",
    sad: "🥺",
    laugh: "😁",
  };

  const reactionsButton = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      onClick={() =>
        dispatch(reactionAdded({ postId: post.id, reaction: name }))
      }
      type="button"
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return <div>{reactionsButton}</div>;
};

export default ReactionsButton;
