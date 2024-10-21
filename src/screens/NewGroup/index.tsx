import { View } from "react-native";
import { Header } from "../../components/header";
import { Users } from "lucide-react-native";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("players", { group: "Rocket" });
  }

  return (
    <View className="h-full bg-GRAY_600 p-6">
      <Header showBackButton />

      <View className="h-full justify-center">
        <View className="items-center">
          <Users size={56} color="#00875F" className="" />
          <TitleAndSubtitle
            title="Nova Turma"
            subtitle="crie uma turma para adicionar pessoas"
          />

          <Input placeholder="Nome da turma" />

          <Button
            title="Criar"
            onPress={handleNewGroup}
            style={{ marginTop: 20 }}
          />
        </View>
      </View>
    </View>
  );
}
