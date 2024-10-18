import { FlatList, Pressable, View, Text } from "react-native";
import { Header } from "../../components/header";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { GroupCard } from "../../components/groupCard";
import { useState } from "react";
import { ListEmpty } from "../../components/listEmpty";
import { Button } from "../../components/button";

export function Home() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <View className="bg-GRAY_600 h-full p-6 items-center">
      <Header />

      <TitleAndSubtitle title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        showsVerticalScrollIndicator={false} // rremover scroll
        data={groups}
        keyExtractor={(item) => item} // key
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
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

      <Button title="Criar nova turma" />
    </View>
  );
}
