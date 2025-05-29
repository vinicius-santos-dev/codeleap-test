import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
const SignupModal = () => {
  const [userName, setUserName] = useState("");

  return (
    <Modal isOpen={true}>
      <h1 className="font-bold text-[22px] mb-6">
        Welcome to CodeLeap network!
      </h1>

      <form>
        <Input
          label="Please enter your username"
          id="username"
          placeholder="John doe"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <div className="flex justify-end mt-4">
          <Button type="submit" variant="destructive">ENTER</Button>
        </div>
      </form>
    </Modal>
  );
};

export default SignupModal;
