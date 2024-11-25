import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, selectAllPosts } from "../store/features/posts/postsSlice";
import SelectAuthor from "./SelectAuthor";
import { selectAllUsers } from "../store/features/users/userSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [author, setAuthor] = useState("");
  const [userId, setUserId] = useState("");
  const posts = useSelector(selectAllPosts);

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const handleSubmit = () => {
    const authorAlreadySelected = posts.some((post) => post.userId === userId);

    if (authorAlreadySelected) {
      alert("Author is already selected, pick another author.");
      return;
    }
    if (title && content) {
      dispatch(addPost(title, content, userId));
    }

    setTitle("");
    setContent("");
  };

  const isValueEntered = Boolean(title) && Boolean(content);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.user}
    </option>
  ));

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Please Enter Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Please Enter Your Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="posAuthor">Author:</label>
        {/* <SelectAuthor author={author} /> */}
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="" disabled={true}>
            Select Author
          </option>
          {userOptions}
        </select>
      </div>

      <button disabled={!isValueEntered} type="button" onClick={handleSubmit}>
        Save Post
      </button>
    </form>
  );
};

export default Form;
