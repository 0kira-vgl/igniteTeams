import { Alert, View } from "react-native";
import { Header } from "../../components/header";
import { Users } from "lucide-react-native";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      } // verica se o input está vazio e não conta os espaços

      await groupCreate(group); // armazena o groupo no local storage
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
    }
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

      <View className="h-3/4 justify-center">
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
