import { Image, Pressable, View } from "react-native";
import LogoImg from "../assets/logo.png";
import { ChevronLeft } from "lucide-react-native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <View className="w-full flex-row items-center justify-center">
      {showBackButton && (
        <Pressable className="flex-1">
          <ChevronLeft size={40} color="#fff" />
        </Pressable>
      )}

      <Image source={LogoImg} className="w-11 h-14" />
    </View>
  );
}
