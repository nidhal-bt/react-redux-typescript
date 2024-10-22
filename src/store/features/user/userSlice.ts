import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../../withTypes";
import { axiosClientInstance } from "../../../services/request";
import { selectUsersStatus } from "./userSelector";
import { fetchPosts } from "../post";

interface IUser {
  id: string;
  name: string;
}

interface IUserState {
  users: Array<IUser>;
  status: "idle" | "pending" | "succeeded" | "rejected";
  error: string | null;
}

export const fetchUsers = createAppAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await axiosClientInstance.get<Array<IUser>>("/users");
    return response.data;
  },
  {
    // A method to control whether the asyncThunk should be executed.
    condition(arg, thunkApi) {
      const usersStatus = selectUsersStatus(thunkApi.getState());
      if (usersStatus !== "idle") {
        return false;
      }
    },
  }
);

const initialState: IUserState = {
  users: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.users.push(...action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});

export default usersSlice.reducer;
