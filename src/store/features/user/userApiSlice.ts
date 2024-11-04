import { IUser } from "../../../types/type";
import { apiSlice } from "../api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUser, void>({
      query: () => "/users",
    }),
  }),
});

const { useGetUsersQuery } = userApiSlice;
