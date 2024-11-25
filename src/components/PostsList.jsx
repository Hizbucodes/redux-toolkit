import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "../store/features/posts/postsSlice";
import PostsAccepts from "./PostsAccepts";
import {
  fetchUsers,
  selectAllUsers,
  selectErrorFromUser,
  selectStatusFromUser,
} from "../store/features/users/userSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);
  const userStatus = useSelector(selectStatusFromUser);
  const userError = useSelector(selectErrorFromUser);
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postStatus === "idle" && userStatus === "idle") {
      dispatch(fetchPosts());
      dispatch(fetchUsers());
    }
  }, [dispatch, postStatus, userStatus]);

  let content;

  if (postStatus === "loading" && userStatus === "loading") {
    content = <p>Loading Posts...</p>;
  } else if (postStatus === "succeeded" && userStatus === "succeeded") {
    const sortedLists = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    const userId = users.map((user) => user.userId);
    const userName = posts.find((post) => post.userId === userId);
    console.log("lllllllllllllllll", userName?.name);
    console.log("postAuthor ID: ", userId);

    content = sortedLists.map((post) => (
      <PostsAccepts post={post} key={post.id} userId={userId} />
    ));
  } else if (postStatus === "failed" && userStatus === "faield") {
    content = <p>{postError}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
