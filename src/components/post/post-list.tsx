import PostCard from "./post-card";
import { IPost } from "../../types/type";

const PostList = ({ posts }: { posts: Array<IPost> }) => {
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
