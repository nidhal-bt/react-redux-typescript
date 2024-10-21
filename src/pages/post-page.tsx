import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useParams } from "react-router";
import { useAppSelector } from "../store/hooks";
import { selectPostById } from "../store/features/post";
import { selectAllUsers } from "../store/features/user/userSlice";

const PostPage = () => {
  const { postId = "" } = useParams();
  const post = useAppSelector((state) => selectPostById(state, postId));
  // const users = useAppSelector(selectAllUsers);
  // console.log("users", users);

  return (
    <Card className="max-w-[250px] h-full">
      <CardHeader>
        <CardTitle>user: {post?.userId}</CardTitle>
        <CardDescription>{post?.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post?.body}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default PostPage;
