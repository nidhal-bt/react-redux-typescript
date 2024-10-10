import PostCard from "./post-card";
import { TPost } from "../../types/type";

const PostList = ({ posts }: { posts: Array<TPost> }) => {
  return (
    <div>
      <h6>post-list</h6>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-6">
        {posts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
