import { RootState } from "../../store";
import { selectCurrentUsername } from "../auth/authSelector";

export const selectAllUsers = (state: RootState) => state.user.users;

export const selectUserById = (state: RootState, userId: string | null) =>
  state.user.users.find((user) => user.id === userId);

export const selectUserByUsername = (state: RootState, userName: string) =>
  state.user.users.find((user) => user.name === userName);

export const selectCurrentUser = (state: RootState) => {
  const currentUsername = selectCurrentUsername(state);
  return selectUserByUsername(state, currentUsername);
};

export const selectUsersStatus = (state: RootState) => state.user.status;
export const selectUsersError = (state: RootState) => state.user.error;
