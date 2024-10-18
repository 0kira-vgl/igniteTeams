import { Text, View } from "react-native";

type TitleAndSubtitleProps = {
  title: string;
  subtitle: string;
};

export function TitleAndSubtitle({ title, subtitle }: TitleAndSubtitleProps) {
  return (
    <View className="w-full my-8 items-center">
      <Text className="text-zinc-50 font-bold text-2xl">{title}</Text>
      <Text className="text-lg text-GRAY_300">{subtitle}</Text>
    </View>
  );
}
