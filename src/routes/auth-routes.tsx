import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../store/hooks";
import { isAuthenticatedUser } from "../store/features/auth/authSelector";

const AuthRoutes = () => {
  const location = useLocation();
  const isAuthenticated = useAppSelector(isAuthenticatedUser);

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default AuthRoutes;
