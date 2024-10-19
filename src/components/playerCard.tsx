import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonIcon } from "./buttonIcon";

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <View
      style={{ marginBottom: 16 }}
      className="w-full h-16 bg-GRAY_500 flex-row items-center rounded-md"
    >
      <View
        style={{
          marginLeft: 16,
          marginRight: 4,
        }}
      >
        <MaterialIcons name="person" size={24} color="#C4C4CC" />
      </View>
      <Text className="flex-1 text-GRAY_200 text-lg">{name}</Text>

      <ButtonIcon onPress={onRemove} icon="close" />
    </View>
  );
}
