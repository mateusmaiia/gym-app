import { HStack, VStack } from "native-base";
import { HomeHeader } from "../Components/HomeHeader";
import { Group } from "../Components/Group";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <Group name="costas" />
        <Group name="ombro" />
      </HStack>
    </VStack>
  );
}
