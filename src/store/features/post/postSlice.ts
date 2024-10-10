import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPost } from "../../../types/type";

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
const authSlice = createSlice({
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
});

// Export the auto-generated action creator with the same name
export const { add: addPost } = authSlice.actions;

// Export the generated reducer function
export default authSlice.reducer;
