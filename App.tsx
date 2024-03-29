import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Loading } from "./src/Components/Loading";
import { THEME } from "./src/theme/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Routes } from "./src/routes";
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
