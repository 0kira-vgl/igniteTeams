import { FlatList, View, Text, Alert } from "react-native";
import { Header } from "../../components/header";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { ButtonIcon } from "../../components/buttonIcon";
import { Input } from "../../components/input";
import { Filter } from "../../components/filter";
import { useEffect, useState } from "react";
import { PlayerCard } from "../../components/playerCard";
import { ListEmpty } from "../../components/listEmpty";
import { Button } from "../../components/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { AppError } from "../../utils/AppError";
import { playerAddGroup } from "../../storage/player/playerAddGroup";
import { playersGetGroupAndTeam } from "../../storage/player/playersGetGroupAndTeam";
import { PlayerStorageDTS } from "../../storage/player/PlayerStorageDTS";

// define a tipagem para os parâmetros que o componente Players receberá via navegação
type PlayersProps = {
  group: string; // group: o nome do grupo que é passado como parâmetro lá no @types
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState(""); // guarda o nome digitado

  // declarando o estado para o time atual e a lista de jogadores
  const [team, setTeam] = useState("Time A"); // inicializa o estado do time com "Time A"
  const [players, setPlayers] = useState<PlayerStorageDTS[]>([]); // inicializa o estado dos jogadores como um array vazio

  // obtém os parâmetros da rota atual
  const route = useRoute(); // chama o hook useRoute para acessar os parâmetros da rota
  const { group } = route.params as PlayersProps; // extrai o parâmetro 'group' da rota e o tipa como PlayersProps

  async function handleAddPlayer() {
    // verifica se o campo "newPlayerName" está vazio ou contém apenas espaços em branco
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova Pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }

    // cria um novo objeto representando o jogador a ser adicionado, contendo o nome e o time
    const newPlayer = {
      name: newPlayerName, // nome do jogador, vindo de uma variável externa
      team, // time do jogador, também vindo de uma variável externa
    };

    try {
      // tenta adicionar o novo jogador ao grupo chamando uma função assíncrona que manipula a adição no banco de dados ou armazenamento
      await playerAddGroup(newPlayer, group);
      fetchPlayersTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Pessoa", "Não foi possível adicionar.");
      }
    }
  }

  async function fetchPlayersTeam() {
    try {
      const playersTeam = await playersGetGroupAndTeam(group, team);
      setPlayers(playersTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Jogadores", "Não foi possível carregar os jogadores.");
    }
  }

  useEffect(() => {
    fetchPlayersTeam(); // carrega os jogadores do grupo ao iniciar a tela
  }, [team]);

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#202024",
        padding: 24,
      }}
      className="h-screen bg-GRAY_600 p-6"
    >
      <Header showBackButton />

      <TitleAndSubtitle
        title={group} // exibe o nome do grupo passado como parâmetro na tela
        subtitle="adicione a galera e separe os times"
      />

      <View className="w-full bg-GRAY_700 flex-row items-center justify-center rounded-md">
        <Input
          placeholder="Nome do participante"
          onChangeText={setNewPlayerName}
          autoCorrect={false} // desativa a correção automática
          className="flex-1"
        />

        <ButtonIcon onPress={handleAddPlayer} icon="add" color="#00875F" />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 32,
          marginBottom: 20,
        }}
      >
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team} // verifica se o time atual é o mesmo do filtro
              onPress={() => setTeam(item)} // atualiza o time atual ao pressionar o filtro
            />
          )}
          horizontal // define a lista como horizontal
        />

        <Text className="text-GRAY_200 font-bold text-lg">
          {players.length} {/* mostra o número total de jogadores */}
        </Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => {}} name={item.name} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 150 },
          players.length === 0 && { flex: 1 }, // centraliza a mensagem caso a lista estiver vazia
        ]}
        ListEmptyComponent={() => {
          return (
            <ListEmpty
              title="Não há pessoas nesse time"
              subtitle="Que tal adicionar a primeira pessoa?"
            />
          );
        }}
      />

      <Button title="Remover turma" variant="secondary" />
    </SafeAreaView>
  );
}
