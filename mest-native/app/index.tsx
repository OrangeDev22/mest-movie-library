import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-cyan-300">
      <Text>Welcome to Mest</Text>
      <StatusBar style="dark" />
    </View>
  );
}
