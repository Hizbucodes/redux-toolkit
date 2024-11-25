import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const initialState = {
  users: [],
  status: "idle", // 'loading' | 'succeeded' | 'failed'
  error: null,
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});
export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectAllUsers = (state) => state.users.users;
export const selectStatusFromUser = (state) => state.users.status;
export const selectErrorFromUser = (state) => state.users.error;

export default userSlice.reducer;
