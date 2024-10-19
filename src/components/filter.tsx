import { PressableProps } from "react-native";
import { Pressable, Text } from "react-native";

type FilterProps = PressableProps & {
  title: string;
  isActive?: boolean;
};
export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Pressable
      {...rest}
      style={{
        borderRadius: 4,
        borderWidth: 1,
        borderColor: isActive ? "#047857" : "transparent", // use a cor verde se ativo, ou transparente se não
        height: 38,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
      }}
    >
      <Text className="uppercase font-bold text-white text-sm">{title}</Text>
    </Pressable>
  );
}
