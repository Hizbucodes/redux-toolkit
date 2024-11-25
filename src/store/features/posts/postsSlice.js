import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  posts: [],
  status: "idle", //| "loading" | "succeeded" | "failed",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await axios.get(USERS_URL);

//   return response.data;
// });

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
            reactions: {
              like: 0,
              wow: 0,
              heart: 0,
              angry: 0,
              sad: 0,
              laugh: 0,
            },
            date: new Date().toISOString(),
          },
        };
      },
    },

    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;

      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";

        let min = 1;

        const loadedPosts = action.payload.map((post) => {
          post.reactions = {
            like: 0,
            wow: 0,
            heart: 0,
            angry: 0,
            sad: 0,
            laugh: 0,
          };

          post.date = sub(new Date(), { minutes: min++ }).toISOString();

          return post;
        });

        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const {
  addPost,
  removePost,
  isLoadingState,
  reactionAdded,
  deletePost,
} = postsSlice.actions;
export default postsSlice.reducer;
