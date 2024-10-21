import { RootState } from "../../store";

export const selectCurrentUsername = (state: RootState) => state.auth.userName;
export const isAuthenticatedUser = (state: RootState) => !!state.auth.userName;
