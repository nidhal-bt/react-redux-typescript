import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPost } from "../../../types/type";
import { RootState } from "../../store";
import { userLoggedOut } from "../auth";

// Define a TS type for the data we'll be using

interface IPostState {
  posts: Array<TPost>;
}

// Create an initial state value for the reducer, with that type
const initialState: IPostState = {
  posts: [
    {
      userId: 1,
      id: "1",
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: "2",
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: "3",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ],
};

// Create the slice and pass in the initial state
const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TPost>) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
  },
  selectors: {
    // Note that these selectors are given just the `PostsState`
    // as an argument, not the entire `RootState`
    selectAllPosts: (postsState) => postsState.posts,
    selectPostById: (postsState, postId: string) => {
      return postsState.posts.find((el) => el.id === postId);
    },
  },
  // a listen event inside the slice for actions that were difined inside the App
  // every extraReducers event can modifiy only slice state
  extraReducers(builder) {
    // Pass the action creator to `builder.addCase()`
    builder.addCase(userLoggedOut, (state) => {
      // Clear out the list of posts whenever the user logs out
      return initialState;
    });
  },
});

// Export the auto-generated action creator with the same name
export const { add: addPost } = postsSlice.actions;

// Export the auto-generated selector creator with the same name
// We can use this methods only in case we don't need an access to the entire RootState
// else we need to write selectors as standalone functions outside of createSlice
export const { selectAllPosts, selectPostById } = postsSlice.selectors;

// Export the generated reducer function
export default postsSlice.reducer;
