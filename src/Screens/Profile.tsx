import {
  VStack,
  Text,
  Center,
  Skeleton,
  Circle,
  Heading,
  ScrollView,
} from "native-base";
import { ScreenHeader } from "../Components/ScreenHeader";
import { UserPhoto } from "../Components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const PHOTO_SIZE = 33;
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={8} px={10}>
          {photoIsLoading ? (
            <Skeleton
              size={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/mateusmaiia.png" }}
              size={PHOTO_SIZE}
              alt="Foto de usuário"
            />
          )}
          <TouchableOpacity>
            <Text
              color="green.500"
              mt={3}
              fontSize="md"
              fontWeight="bold"
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input bg="gray.600" placeholder="Nome" />
          <Input bg="gray.600" value="mateusssmaia@gmail.com" isDisabled />
        </Center>

        <VStack mt={12} px={10} pb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>
          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
