import { Image, View } from "react-native";
import LogoImg from "../assets/logo.png";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-center">
      <Image source={LogoImg} className="w-11 h-14" />
    </View>
  );
}
