import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  userName: string;
}

const initialState: IAuthState = {
  userName: "",
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IAuthState>) => {
      return {
        ...state,
        userName: action.payload.userName,
      };
    },
    userLoggedOut: () => {
      return {
        userName: "",
      };
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
