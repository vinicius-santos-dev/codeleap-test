import Header from "../../components/Header";
import PostCard from "./PostCard";
import PostForm from "./PostForm";

const MainScreen = () => {
  return (
    <>
      <Header />

      <div className="max-w-[800px] flex flex-col mx-auto p-6 gap-6">
        <PostForm />
        <PostCard />
      </div>
    </>
  );
};

export default MainScreen;
