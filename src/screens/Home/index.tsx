import { FlatList, View } from "react-native";
import { Header } from "../../components/header";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { GroupCard } from "../../components/groupCard";
import { useCallback, useEffect, useState } from "react";
import { ListEmpty } from "../../components/listEmpty";
import { Button } from "../../components/button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { groupsGetAll } from "../../storage/group/groupsGetAll";

export function Home() {
  const [groups, setGroups] = useState<string[]>([]); // lista de usuarios
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("newGroup"); // mavegação para quando o usuário clicar no botão
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll(); // pega a lista de groups
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group }); // abre a lista de pessoas no grupo
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups(); // carrega as turmas ao iniciar a tela
    }, [])
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#202024",
        height: "100%",
        padding: 24,
      }}
      className="bg-GRAY_600 h-screen p-6"
    >
      <Header />

      <TitleAndSubtitle title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        showsVerticalScrollIndicator={false} // rremover scroll
        data={groups}
        keyExtractor={(item) => item} // key
        renderItem={({ item }) => (
          <GroupCard onPress={() => handleOpenGroup(item)} title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }} // "centraliza" o ListEmpty caso a lista estiver vazia
        ListEmptyComponent={() => {
          return (
            <ListEmpty
              title="Você ainda não tem turmas cadastradas"
              subtitle="Que tal criar a primeira turma?"
            />
          );
        }}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </SafeAreaView>
  );
}
