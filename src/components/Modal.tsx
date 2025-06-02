import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
};

const Modal = ({ isOpen, children, onClose, className }: ModalProps) => {
  if (!isOpen) return null;

  if (onClose) onClose();

  return (
    <div className="bg-black/20 fixed inset-0 z-10 flex items-center justify-center">
      <div
        className={twMerge("rounded-2xl p-6 bg-white min-w-[500px]", className)}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
