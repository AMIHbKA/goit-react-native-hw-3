import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <>
      <StatusBar />
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <PostsScreen /> */}
    </>
  );
}
