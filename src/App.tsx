import Navbar from "./components/layout/navbar";
import AddPostPage from "./pages/add-post-page";
import HomePage from "./pages/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPage from "./pages/post-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <HomePage />
      </Navbar>
    ),
  },
  {
    path: "/add",
    element: (
      <Navbar>
        <AddPostPage />
      </Navbar>
    ),
  },
  {
    path: "/post/:postId",
    element: (
      <Navbar>
        <PostPage />
      </Navbar>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
