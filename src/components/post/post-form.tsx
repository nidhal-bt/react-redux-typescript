import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../store/hooks";
import { addNewPost } from "../../store/features/post/postSlice";
import { IPost } from "../../types/type";
import { useForm } from "react-hook-form";
import InputForm from "../form/input-form/input-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

export const AddPostForm = () => {
  // Get the `dispatch` method from the store
  const dispatch = useAppDispatch();
  const form = useForm<IPost>({
    defaultValues: {
      title: "",
      body: "",
      userId: 0,
      id: nanoid(),
    },
  });

  const onSave = (newPost: IPost) => {
    dispatch(addNewPost(newPost)).unwrap();
  };

  return (
    <section>
      <h2>Add a New Post</h2>
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
          <Button>Save</Button>
        </form>
      </Form>
    </section>
  );
};
