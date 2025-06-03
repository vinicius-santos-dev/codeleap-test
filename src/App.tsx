import SignupModal from "./features/auth/SignupModal";
import { useUsername } from "./features/auth/context/useAuth";
import MainScreen from "./features/posts/MainScreen";

function App() {
  const { userName } = useUsername();

  return userName ? <MainScreen /> : <SignupModal />;
}

export default App;
