import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./protected-route";
import HomePage from "../pages/home-page";
import AddPostPage from "../pages/add-post-page";
import PostPage from "../pages/post-page";
import LoginPage from "../pages/login-page";
import AuthRoutes from "./auth-routes";

const AppRouter = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add",
        element: <AddPostPage />,
      },
      {
        path: "/post/:postId",
        element: <PostPage />,
      },
    ],
  },
  {
    element: <AuthRoutes />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
  {
    path: "*",
    element: <p>Page not found</p>,
  },
]);

export default AppRouter;
