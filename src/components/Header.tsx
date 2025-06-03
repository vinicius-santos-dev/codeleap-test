import { useUsername } from "../features/context/useAuth";

const Header = () => {
  const { clearUserName } = useUsername();

  const handleLogout = () => {
    clearUserName();
  };

  return (
    <header className="max-w-[800px] mx-auto">
      <div className="h-[80px] bg-primary px-9 py-7 flex items-center justify-between border-b border-[#999999]">
        <h1 className="text-white">CodeLeap Network</h1>

        <p
          className="relative text-white cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:font-medium"
          onClick={handleLogout}
        >
          Logout
        </p>
      </div>
    </header>
  );
};

export default Header;
