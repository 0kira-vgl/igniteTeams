import "./global.css";
import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { NewGroup } from "./src/screens/NewGroup";
import { Players } from "./src/screens/Players";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <Home /> */}
      {/* <NewGroup /> */}
      <Players />
    </>
  );
}
