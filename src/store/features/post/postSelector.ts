import { RootState } from "../../store";

export const selectAllPosts = (state: RootState) => state.post.posts;

export const selectPostById = (state: RootState, postId: string) =>
  state.post.posts.find((el) => el.id === postId);
