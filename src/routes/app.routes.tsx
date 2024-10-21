import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewGroup } from "../screens/NewGroup";
import { Players } from "../screens/Players";

const { Navigator, Screen } = createNativeStackNavigator(); // desestrutura o que vai ser usado

export function AppRoutes() {
  return (
    // "initialRouteName" define a primeira rota a ser carregada
    // "headerShown" remove o header da navigation

    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newGroup" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
