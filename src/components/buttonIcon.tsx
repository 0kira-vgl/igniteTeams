import { Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = PressableProps & {
  icon: keyof typeof MaterialIcons.glyphMap; // garante que o nome do ícone seja válido
  color?: string;
};
export function ButtonIcon({ icon, color, ...rest }: ButtonIconProps) {
  return (
    <Pressable {...rest} className="size-14 justify-center items-center ml-3">
      <MaterialIcons name={icon} size={30} color={color || "#CC2937"} />
    </Pressable>
  );
}
