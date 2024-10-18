import PostList from "../components/post/post-list";
import { selectAllPosts } from "../store/features/post";
import { useAppSelector } from "../store/hooks";

const HomePage = () => {
  const posts = useAppSelector(selectAllPosts);

  return (
    <div className="p-2">
      <h6>Home page</h6>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
