import { Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
export default function App() {
  useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <View>
      <Text>Open world!</Text>
    </View>
  );
}
