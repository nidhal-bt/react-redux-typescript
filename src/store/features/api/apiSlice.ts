// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../../types/type";
import { envClient } from "../../../config";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: envClient.apiBaseUrl }),
  // The meaning of tag type is cache name
  tagTypes: ["Post"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data.
    // The return value is a `Post[]` array, and it takes no arguments.
    getPosts: builder.query<IPost[], void>({
      // The URL for the request is '/fakeApi/posts'
      query: () => ({
        url: `/posts`,
      }),
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id: "LIST" } as const)),
      ],
    }),
    getPost: builder.query<IPost, { postId: string }>({
      query: ({ postId }: { postId: string }) => `/posts/${postId}`,
      providesTags: (result, error, { postId }) => [
        { type: "Post", id: postId },
      ],
    }),
    addPost: builder.mutation<IPost, IPost>({
      query: (initialPost) => ({
        // The HTTP URL
        url: "/posts",
        // This is an HTTP POST request, sending an update
        method: "POST",
        // Include the entire post object as the body of the request
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        // This is an HTTP POST request, sending an update
        method: "PATCH",
        // Include the entire post object as the body of the request
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostQuery,
  useEditPostMutation,
} = apiSlice;
