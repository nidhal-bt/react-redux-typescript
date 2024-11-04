import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./protected-route";
import HomePage from "../pages/home-page";
import AddPostPage from "../pages/add-post-page";
import PostPage from "../pages/post-page";
import LoginPage from "../pages/login-page";
import AuthRoutes from "./auth-routes";
import { EditPostPage } from "../pages/edit-post-page";

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
      {
        path: "/edit/:postId",
        element: <EditPostPage />,
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
