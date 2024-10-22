import { useEffect, useRef } from "react";
import PostList from "../components/post/post-list";
import {
  fetchPosts,
  selectAllPosts,
  selectPostsError,
  selectPostsStatus,
} from "../store/features/post";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Loader from "../components/shared/loader/loader";
import { fetchUsers, selectCurrentUser } from "../store/features/user";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(selectPostsStatus);
  const postError = useAppSelector(selectPostsError);
  const user = useAppSelector(selectCurrentUser);
  console.log("user", user);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, []);

  let content: React.ReactNode;

  if (postStatus === "pending") {
    content = <Loader />;
  } else if (postStatus === "succeeded") {
    content = <PostList posts={posts} />;
  } else if (postStatus === "rejected") {
    content = <div>{postError}</div>;
  }

  return (
    <div className="p-2">
      <h6>Home page</h6>
      {content}
    </div>
  );
};

export default HomePage;
