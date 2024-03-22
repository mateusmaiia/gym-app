import { VStack } from "native-base";
import { HomeHeader } from "../Components/HomeHeader";
import { Group } from "../Components/Group";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Group name="costas" />
    </VStack>
  );
}
