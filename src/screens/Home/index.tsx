import { FlatList } from "react-native";
import { Header } from "../../components/header";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { GroupCard } from "../../components/groupCard";
import { useCallback, useState } from "react";
import { ListEmpty } from "../../components/listEmpty";
import { Button } from "../../components/button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { groupsGetAll } from "../../storage/group/groupsGetAll";
import { Loading } from "../../components/loading";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]); // lista de usuarios
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("newGroup"); // mavegação para quando o usuário clicar no botão
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupsGetAll(); // pega a lista de groups
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group }); // abre a lista de pessoas no grupo
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups(); // carrega as grupos ao iniciar a tela
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

      <TitleAndSubtitle title="Grupos" subtitle="jogue com o seu grupo" />

      {isLoading ? (
        <Loading />
      ) : (
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
                title="Você ainda não tem grupos cadastradas"
                subtitle="Que tal criar a primeira grupo?"
              />
            );
          }}
        />
      )}

      <Button title="Criar novo grupo" onPress={handleNewGroup} />
    </SafeAreaView>
  );
}
