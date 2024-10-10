import React from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { TPost } from "../../types/type";

const PostCard = ({ body, title, userId }: TPost) => {
  return (
    <Card className="max-w-[250px] h-full">
      <CardHeader>
        <CardTitle>user: {userId}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
