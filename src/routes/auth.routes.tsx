import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../Screens/SignIn";
import { SignUp } from "../Screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
