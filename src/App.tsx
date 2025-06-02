import SignupModal from "./features/auth/SignupModal";
import { useUsername } from "./features/context/useAuth";
import MainScreen from "./features/posts/MainScreen";

function App() {
  const { userName } = useUsername();

  return userName ? <MainScreen /> : <SignupModal />;
}

export default App;
