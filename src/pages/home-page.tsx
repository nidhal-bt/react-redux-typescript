import { AddPostForm } from "../components/post/post-form";
import PostList from "../components/post/post-list";
import { useAppSelector } from "../store/hooks";
// import { updateUser } from "../../store/features/auth/authSlice";

const HomePage = () => {
  const { posts } = useAppSelector((state) => state.post);

  return (
    <div className="p-2">
      <h6>Home page</h6>
      <AddPostForm />
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
