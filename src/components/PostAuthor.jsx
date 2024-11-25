import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../store/features/users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.userId === parseInt(userId));

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
