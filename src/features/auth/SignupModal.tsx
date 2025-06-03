import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { useUsername } from "./context/useAuth";

const SignupModal = () => {
  const { userName, saveUserName } = useUsername();
  const [inputValue, setInputValue] = useState("");

  const isInputValid = inputValue.trim().length > 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();

    if (trimmedValue) saveUserName(trimmedValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (userName) return null;

  return (
    <Modal isOpen={true}>
      <h1 className="mb-6">Welcome to CodeLeap network!</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Please enter your username"
          id="username"
          placeholder="John doe"
          value={inputValue}
          onChange={handleInputChange}
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
