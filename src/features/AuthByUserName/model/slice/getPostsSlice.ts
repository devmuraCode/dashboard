import { createSlice } from "@reduxjs/toolkit";
import { getPost } from "../servic/loginUser";

const initialState= {
  post: [],
  loading: "idle",
  error: null,
  selectedCategory: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Failed to fetch menu';
      });
  },
});

 export const { setSelectedCategory } = postsSlice.actions;
export default postsSlice.reducer;
