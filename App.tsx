import { View } from "react-native";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/Components/Loading";
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor="transparent"
      />
      {!fontsLoaded ? <View /> : <Loading />}
    </NativeBaseProvider>
  );
}
