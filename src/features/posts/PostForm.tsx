import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { useUsername } from "../auth/context/useAuth";
import usePosts from "./hooks/usePosts";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createPost } = usePosts();
  const { userName } = useUsername();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title || !content) return;

    createPost.mutate(
      {
        username: userName || "",
        title,
        content,
      },
      {
        onSuccess: () => resetForm(),
      }
    );
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex flex-col p-6 rounded-2xl border border-[#999999]">
      <h1 className="mb-6">What's on your mind?</h1>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          placeholder="Hello, World"
          value={title}
          onChange={handleTitleChange}
          required
        />

        <Input
          label="Content"
          id="content"
          placeholder="Content here"
          value={content}
          onChange={handleContentChange}
          multiline
          rows={4}
          required
        />

        <div className="flex justify-end">
          <Button
            className="w-[120px] h-[32px]"
            type="submit"
            disabled={!title || !content}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
