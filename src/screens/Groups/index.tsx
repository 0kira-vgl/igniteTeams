import { Text, View } from "react-native";
import { Header } from "../../components/header";

export function Groups() {
  return (
    <View className="flex items-center justify-center bg-GRAY_600 h-full p-6">
      <Header />
      <Text className="text-zinc-50 font-bold">Groups</Text>
    </View>
  );
}
