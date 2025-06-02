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
          className="text-white cursor-pointer hover:font-bold"
          onClick={handleLogout}
        >
          Logout
        </p>
      </div>
    </header>
  );
};

export default Header;
