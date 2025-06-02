import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";

const EditModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} className="w-[660px]">
      <h1 className="mb-6">Edit Item</h1>

      <form className="flex flex-col gap-6">
        <Input label="Title" id="title" placeholder="Hello, World!" required />

        <Input
          label="Content"
          id="content"
          placeholder="Content here"
          required
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
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
