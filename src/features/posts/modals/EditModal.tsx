import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import usePosts from "../hooks/usePosts";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number;
  initialTitle: string;
  initialContent: string;
}

const EditModal = ({
  isOpen,
  onClose,
  postId,
  initialTitle,
  initialContent,
}: EditModalProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const { updatePost } = usePosts();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!postId) return;

    updatePost.mutate(
      { id: postId, title, content },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} className="w-[660px]">
      <h1 className="mb-6">Edit Item</h1>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          placeholder="Hello, World!"
          value={title}
          onChange={handleTitleChange}
        />

        <Input
          label="Content"
          id="content"
          placeholder="Content here"
          value={content}
          onChange={handleContentChange}
          multiline
          rows={4}
        />

        <div className="flex justify-end gap-4">
          <Button
            className="w-[120px] h-[32px]"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            className="w-[120px] h-[32px]"
            variant="secondary"
            type="submit"
            disabled={!title && !content}
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
