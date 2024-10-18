import { FlatList, Text, View } from "react-native";
import { Header } from "../../components/header";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { GroupCard } from "../../components/groupCard";
import { useState } from "react";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Teste Array", "Queijo"]);

  return (
    <View className="bg-GRAY_600 h-full p-6 items-center">
      <Header />

      <TitleAndSubtitle title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        showsVerticalScrollIndicator={false} // rremover scroll
        className="w-full"
        data={groups}
        keyExtractor={(item) => item} // key
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
      />
    </View>
  );
}
