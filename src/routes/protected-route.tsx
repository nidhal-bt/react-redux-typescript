import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../store/hooks";
import { isAuthenticatedUser } from "../store/features/auth/authSelector";
import Navbar from "../components/layout/navbar";

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuthenticated = useAppSelector(isAuthenticatedUser);

  if (isAuthenticated === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return isAuthenticated ? (
    <Navbar>
      <Outlet />
    </Navbar>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
