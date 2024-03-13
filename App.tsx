import { Text, View } from "react-native";
import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#202024",
      }}
    >
      {fontsLoaded ? <Text>Open world!</Text> : <View />}
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor="transparent"
      />
    </View>
  );
}
