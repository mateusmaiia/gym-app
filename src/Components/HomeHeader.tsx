import { Center, HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";
export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: "https://github.com/mateusmaiia.png" }}
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack>
        <Text color="gray.100" fontSize={"md"}>
          Olá,
        </Text>
        <Heading color="gray.100" fontSize={"md"}>
          Mateus Maia
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          //dizer qual bibioteca quer usar.
          as={MaterialIcons}
          name="logout"
          size={7}
          color="gray.200"
        />
      </TouchableOpacity>
    </HStack>
  );
}
