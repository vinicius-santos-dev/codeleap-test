import useUsername from "./features/auth/hooks/useUsername";
import SignupModal from "./features/auth/SignupModal";
import MainScreen from "./features/posts/MainScreen";

function App() {
  const { userName } = useUsername();

  return <>{userName ? <MainScreen /> : <SignupModal />}</>;
}

export default App;
