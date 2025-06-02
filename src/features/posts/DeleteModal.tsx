import type { FormEvent } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import usePosts from "./hooks/usePosts";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number;
}

const DeleteModal = ({ isOpen, onClose, postId }: DeleteModalProps) => {
  const { deletePost } = usePosts();

  const handleDelete = (e: FormEvent) => {
    e.preventDefault();

    if (!postId) return;

    deletePost.mutate(postId, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <Modal isOpen={isOpen} className="w-[660px]">
      <h1>Are you sure you want to delete this item?</h1>

      <form className="flex flex-col mt-10" onSubmit={handleDelete}>
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
            variant="destructive"
            type="submit"
          >
            Delete
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default DeleteModal;
