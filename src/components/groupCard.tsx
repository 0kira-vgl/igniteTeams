import { Users } from "lucide-react-native";
import { Pressable, Text, PressableProps } from "react-native";

type GroupCardProps = PressableProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Pressable
      {...rest}
      className="w-full h-24 rounded-md bg-GRAY_500 flex-row items-center p-6 mb-3"
    >
      <Users size={32} color="#00875F" />

      <Text className="text-xl text-GRAY_200 ml-5">{title}</Text>
    </Pressable>
  );
}
