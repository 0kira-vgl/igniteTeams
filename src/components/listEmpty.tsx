import { CircleOff } from "lucide-react-native";
import { View, Text } from "react-native";

type ListEmptyProps = {
  title: string;
  subtitle: string;
};

export function ListEmpty({ title, subtitle }: ListEmptyProps) {
  return (
    <View className="h-full justify-center items-center">
      <CircleOff size={35} color="#3D3D3D" />

      <Text className="text-[#808080] text-lg font-bold mt-4">{title}</Text>
      <Text className="text-[#808080] text-lg">{subtitle}</Text>
    </View>
  );
}
