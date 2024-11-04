import React from "react";
import { useParams } from "react-router";
import EditPostForm from "../components/post/edit-post-form";

export const EditPostPage = () => {
  const { postId = "" } = useParams();
  return (
    <div>
      Edit page
      <EditPostForm postId={postId} />
    </div>
  );
};
