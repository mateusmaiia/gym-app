import { Icon, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export function Exercise() {
  return (
    <VStack flex={1}>
      <VStack pt={12} bg="gray.600" pb={8}>
        <TouchableOpacity>
          <Icon as={Feather} name="arrow-left" color="green.400" size={6} />
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}
