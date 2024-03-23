import { VStack, Text } from "native-base";
import { ScreenHeader } from "../Components/ScreenHeader";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
    </VStack>
  );
}
