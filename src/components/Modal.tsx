type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="bg-black/20 fixed inset-0 z-10 flex items-center justify-center">
      <div className="rounded-2xl p-6 bg-white min-w-[500px]">{children}</div>
    </div>
  );
};

export default Modal;
