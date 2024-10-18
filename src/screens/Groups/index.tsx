import { Text, View } from "react-native";
import { Header } from "../../components/header";
import { TitleAndSubtitle } from "../../components/titleAndSubtitle";
import { GroupCard } from "../../components/groupCard";

export function Groups() {
  return (
    <View className="items-center justify-center bg-GRAY_600 h-full p-6">
      <Header />
      <TitleAndSubtitle title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Nome da turma" />

      <Text className="text-zinc-50 font-bold">Groups</Text>
    </View>
  );
}
