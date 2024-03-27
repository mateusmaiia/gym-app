import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "../routes/app.routes";
export function Exercise() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack pt={12} bg="gray.600" px={8}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.400" size={6} />
        </TouchableOpacity>
        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <Heading color="gray.100" fontSize={"lg"}>
            Puxada frontal
          </Heading>
          <HStack>
            <Text
              color="gray.200"
              ml={2}
              textTransform="capitalize"
              numberOfLines={1}
            >
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
