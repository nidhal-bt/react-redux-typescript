import PostList from "../components/post/post-list";

import Loader from "../components/shared/loader/loader";

import { apiSlice, useGetPostsQuery } from "../store/features/api/apiSlice";
import { useAppSelector } from "../store/hooks";

const HomePage = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    currentData,
    refetch,
  } = useGetPostsQuery();

  const test = apiSlice.endpoints.getPosts.select();
  const res = useAppSelector(test);
  console.log("test", res);

  let content: React.ReactNode;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  } else if (posts) {
    content = <PostList posts={posts} />;
  }

  return (
    <div className="p-2">
      <h6>Home page</h6>
      <button onClick={refetch}>Refetch Posts</button>
      {content}
    </div>
  );
};

export default HomePage;
