import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View className="h-screen justify-center items-center bg-GRAY_600">
      <ActivityIndicator className="text-GREEN_700" />
    </View>
  );
}
