import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../../types/type";
import { userLoggedOut } from "../auth";
import { axiosClientInstance } from "../../../services/request";
import { createAppAsyncThunk } from "../../withTypes";

// Define a TS type for the data we'll be using
interface IPostState {
  posts: Array<IPost>;
  status: "idle" | "pending" | "succeeded" | "rejected";
  error: string | null;
}

export const fetchPosts = createAppAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await axiosClientInstance.get<Array<IPost>>("/posts");
    return response.data;
  },
  {
    // A method to control whether the asyncThunk should be executed.
    condition(arg, thunkApi) {
      const postsStatus = selectPostsStatus(thunkApi.getState());
      if (postsStatus !== "idle") {
        return false;
      }
    },
  }
);

export const addNewPost = createAppAsyncThunk(
  "posts/addNewPost",
  async (initialPost: Omit<IPost, "id">) => {
    const response = await axiosClientInstance.post<IPost>(
      "/posts",
      initialPost
    );
    return response.data;
  }
);

// Create an initial state value for the reducer, with that type
const initialState: IPostState = {
  posts: [],
  status: "idle",
  error: null,
};

// Create the slice and pass in the initial state
const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // add: (state, action: PayloadAction<IPost>) => {
    //   return {
    //     ...state,
    //     posts: [...state.posts, action.payload],
    //   };
    // },
  },
  selectors: {
    // Note that these selectors are given just the `PostsState`
    // as an argument, not the entire `RootState`
    selectAllPosts: (postsState) => postsState.posts,
    selectPostById: (postsState, postId: string) => {
      return postsState.posts.find((el) => el.id === postId);
    },
    selectPostsStatus: (postsState) => postsState.status,
    selectPostsError: (postsState) => postsState.error,
  },
  // a listen event inside the slice for actions that were difined inside the App
  // every extraReducers event can modifiy only slice state
  extraReducers: (builder) => {
    builder
      .addCase(userLoggedOut, () => {
        // Clear out the list of posts whenever the user logs out
        return initialState;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts.push(...action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message ?? "Unknown Error";
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // We can directly add the new post object to our posts array
        state.posts.push(action.payload);
      });
  },
});

// Export the auto-generated action creator with the same name
// export const { add: addPost } = postsSlice.actions;

// Export the auto-generated selector creator with the same name
// We can use this methods only in case we don't need an access to the entire RootState
// else we need to write selectors as standalone functions outside of createSlice
export const {
  selectAllPosts,
  selectPostById,
  selectPostsStatus,
  selectPostsError,
} = postsSlice.selectors;

// Export the generated reducer function
export default postsSlice.reducer;
