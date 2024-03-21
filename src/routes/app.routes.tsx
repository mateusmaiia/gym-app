import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "../assets/home.svg";
import ProfileSvg from "../assets/profile.svg";
import HistorySvg from "../assets/history.svg";

import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { History } from "../Screens/History";
import { Exercise } from "../Screens/Exercise";
import { useTheme } from "native-base";

const { Navigator, Screen } = createBottomTabNavigator();

type AppRoutes = {
  home: undefined;
  profile: undefined;
  history: undefined;
  exercise: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;
export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green["500"],
        tabBarInactiveTintColor: colors.gray["200"],
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
