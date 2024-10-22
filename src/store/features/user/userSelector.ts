import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { selectCurrentUsername } from "../auth/authSelector";

export const selectAllUsers = (state: RootState) => state.user.users;

export const selectUserById = (state: RootState, userId: string | null) =>
  state.user.users.find((user) => user.id === userId);

export const selectUserByUsername = (state: RootState, userName: string) =>
  state.user.users.find((user) => user.name === userName);

// export const selectCurrentUser = (state: RootState) => {
//   const currentUsername = selectCurrentUsername(state);
//   return selectUserByUsername(state, currentUsername);
// };

export const selectUsersStatus = (state: RootState) => state.user.status;
export const selectUsersError = (state: RootState) => state.user.error;

export const selectCurrentUser = createSelector(
  // Pass in one or more "input selectors"
  [
    // we can pass in an existing selector function that
    // reads something from the root `state` and returns it
    selectCurrentUsername,
    // and another function that extracts one of the arguments
    // and passes that onward
    (state: RootState) => state.user.users,
  ],
  // the output function gets those values as its arguments,
  // and will run when either input value changes
  (userName, users) => users.find((user) => user.name === userName)
);
