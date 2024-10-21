import { View } from "react-native";
import { Header } from "../../components/header";
import { Users } from "lucide-react-native";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("players", { group });
  }

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#202024",
        padding: 24,
      }}
      className="h-full bg-GRAY_600 p-6"
    >
      <Header showBackButton />

      <View className="h-full justify-center">
        <View className="items-center">
          <Users size={56} color="#00875F" className="" />
          <TitleAndSubtitle
            title="Nova Turma"
            subtitle="crie uma turma para adicionar pessoas"
          />

          <Input placeholder="Nome da turma" onChangeText={setGroup} />

          <Button
            title="Criar"
            onPress={handleNewGroup}
            style={{ marginTop: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
