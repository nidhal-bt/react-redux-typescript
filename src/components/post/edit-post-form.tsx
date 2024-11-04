import { useForm } from "react-hook-form";
import { IPost } from "../../types/type";
import {
  useEditPostMutation,
  useGetPostQuery,
} from "../../store/features/api/apiSlice";
import Loader from "../shared/loader/loader";
import InputForm from "../form/input-form/input-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useEffect } from "react";

const EditPostForm = ({ postId }: { postId: string }) => {
  const {
    isFetching,
    data: post,
    isError,
    error,
  } = useGetPostQuery({ postId });
  const [editPost] = useEditPostMutation();

  const form = useForm<IPost>({
    defaultValues: {
      title: post?.title ?? "",
      body: post?.body ?? "",
      userId: post?.userId ?? "",
      id: post?.title ?? "",
    },
  });

  useEffect(() => {
    form.reset({
      ...post,
    });
  }, [post]);

  const onSave = (newPost: IPost) => {
    editPost(newPost);
  };

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div>{error.toString()}</div>;
  }

  return (
    <section>
      <h2>Update Post: {postId}</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSave)}
          className="flex flex-col gap-3 max-w-[300px]"
        >
          <InputForm
            label="Title"
            name="title"
            control={form.control}
            className="flex items-center gap-4 text-sm"
            inputClassName="rounded !mt-0"
            labelClassName="font-semibold text-sm leading-4"
            placeholder="..."
          />
          <InputForm
            label="Body"
            name="body"
            control={form.control}
            className="flex items-center gap-4 text-sm"
            inputClassName="rounded !mt-0"
            labelClassName="font-semibold text-sm leading-4"
            placeholder="..."
          />
          <Button>Update</Button>
        </form>
      </Form>
    </section>
  );
};

export default EditPostForm;
