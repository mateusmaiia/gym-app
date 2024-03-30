import {
  VStack,
  Text,
  Center,
  Skeleton,
  Heading,
  ScrollView,
  //Substitui o Alert
  useToast,
} from "native-base";
import { ScreenHeader } from "../Components/ScreenHeader";
import { UserPhoto } from "../Components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
//Para selecionar
import * as ImagePicker from "expo-image-picker";

//Para buscar pelas informações
import * as FileSystem from "expo-file-system";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/mateusmaiia.png"
  );

  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      //função para abrir/acessar album de fotos do usuário.
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        //tipo de conteudo que quer adicionar da galeria do usuário
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //qualidade vai de 0 a 1
        quality: 1,
        //aspecto da imagem   4x4
        aspect: [4, 4],
        // editar a imagem que quer pegar, por exemplo editar
        allowsEditing: true,

        //a lib foi atualizada e agora pode selecionar mais de uma foto,   no caso, retorna um array
        //dar um limit de fotos selecionadas
        selectionLimit: 1,
      });
      //dentro dessa const tem um objeto e dentro uma prop chamada uri
      console.log(photoSelected);

      //se o usuário cancelou, ele não selecionou uma foto
      if (photoSelected.canceled) {
        return;
      }

      //verifica se existe uma uri.
      if (photoSelected.assets[0].uri) {
        //Busca informações da foto
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );

        //Não aceitar foto com mais de 5MB.
        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 0.1) {
          toast.show({
            title: "Essa imagem é muito grande. Escolha uma de até 5MB.",
            duration: 3000,
            placement: "top",
            bgColor: "red.500",
          });
        }

        //já quer retorna um um obejeto que dentro tem dois arrays de objeto [assets e canceled], pegamos o primeiro elemento dele "assets".
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

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
              source={{ uri: userPhoto }}
              size={PHOTO_SIZE}
              alt="Foto de usuário"
            />
          )}
          <TouchableOpacity onPress={handleUserPhotoSelect}>
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

          <Heading
            color="gray.200"
            mt={36}
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
          >
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
        </Center>
      </ScrollView>
    </VStack>
  );
}
