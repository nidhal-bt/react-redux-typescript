import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useParams } from "react-router";
import { useGetPostQuery } from "../store/features/api/apiSlice";
import Loader from "../components/shared/loader/loader";

const PostPage = () => {
  const { postId = "" } = useParams();
  const {
    isFetching,
    data: post,
    isError,
    error,
  } = useGetPostQuery({ postId });

  if (isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <div>{error.toString()}</div>;
  }

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
