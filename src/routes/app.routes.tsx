import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { History } from "../Screens/History";
import { Exercise } from "../Screens/Exercise";

const { Navigator, Screen } = createBottomTabNavigator();
export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
