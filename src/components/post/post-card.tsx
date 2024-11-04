import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { IPost } from "../../types/type";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const PostCard = ({ body, title, userId, id }: IPost) => {
  return (
    <Card className="max-w-[250px] h-full">
      <CardHeader>
        <CardTitle>user: {userId}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
      <CardFooter className="">
        <Button variant={"link"}>
          <Link to={`/post/${id}`}>See Info</Link>
        </Button>
        <Button>
          <Link to={`/edit/${id}`}>Update Info</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
