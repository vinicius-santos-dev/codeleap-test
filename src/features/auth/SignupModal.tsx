import { useState, type FormEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import useUsername from "./hooks/useUsername";

const SignupModal = () => {
  const { saveUserName } = useUsername();
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const isInputValid = inputValue.trim().length > 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      saveUserName(trimmedValue);

      setIsOpen(false);
      setInputValue("");
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <h1 className="font-bold text-[22px] mb-6">
        Welcome to CodeLeap network!
      </h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Please enter your username"
          id="username"
          placeholder="John doe"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <div className="flex justify-end mt-4">
          <Button type="submit" disabled={!isInputValid}>
            ENTER
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SignupModal;
