import PostList from "../components/post/post-list";

import Loader from "../components/shared/loader/loader";

import { useGetPostsQuery } from "../store/features/api/apiSlice";

const HomePage = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    currentData,
    refetch,
  } = useGetPostsQuery();
  console.log("currentData", currentData);

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
