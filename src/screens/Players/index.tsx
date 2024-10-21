import { FlatList, View, Text } from "react-native";
import { Header } from "../../components/header";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { ButtonIcon } from "../../components/buttonIcon";
import { Input } from "../../components/input";
import { Filter } from "../../components/filter";
import { useState } from "react";
import { PlayerCard } from "../../components/playerCard";
import { ListEmpty } from "../../components/listEmpty";
import { Button } from "../../components/button";
import { SafeAreaView } from "react-native-safe-area-context";

export function Players() {
  // declarando o estado para o time atual e a lista de jogadores
  const [team, setTeam] = useState("Time A"); // inicializa o estado do time com "Time A"
  const [players, setPlayers] = useState(["Rodrigo", "Vini"]); // inicializa o estado dos jogadores como um array vazio

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
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <View className="w-full bg-GRAY_700 flex-row items-center justify-center rounded-md">
        <Input
          placeholder="Nome do participante"
          autoCorrect={false} // desativa a correção automática
          className="flex-1"
        />

        <ButtonIcon icon="add" color="#00875F" />
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
          {players.length} {/* Mostra o número total de jogadores */}
        </Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => {}} name="Rodrigo Gonçalves" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 150 },
          players.length === 0 && { flex: 1 },
        ]} // centraliza a mensagem caso a lista estiver vazia
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
