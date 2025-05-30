import Button from "../../components/Button";
import Input from "../../components/Input";

const PostForm = () => {
  return (
    <div className="flex flex-col p-6 rounded-2xl border border-[#999999]">
      <h1 className="mb-6">What's on your mind?</h1>

      <form className="flex flex-col gap-6">
        <Input label="Title" id="title" placeholder="Hello, World" required />

        <Input
          label="Content"
          id="content"
          placeholder="Content here"
          multiline
          rows={4}
          required
        />

        <div className="flex justify-end">
          <Button className="w-[120px] h-[32px]">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
