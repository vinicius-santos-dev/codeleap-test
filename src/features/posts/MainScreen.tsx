import PostCard from "./PostCard";
import PostForm from "./PostForm";

const MainScreen = () => {
  return (
    <>
      <header className="max-w-[800px] mx-auto">
        <div className="h-[80px] bg-primary px-9 py-7 flex items-center border-b border-[#999999]">
          <h1 className="text-white">CodeLeap Network</h1>
        </div>
      </header>

      <div className="max-w-[800px] flex flex-col mx-auto p-6 gap-6">
        <PostForm />
        <PostCard />
      </div>
    </>
  );
};

export default MainScreen;
