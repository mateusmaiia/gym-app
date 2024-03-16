import { VStack, Image, Text, Center } from "native-base";
import BackgorundImg from "../assets/background.png";
import LogoSvg from "../assets/logo.svg";
export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgorundImg}
        defaultSource={BackgorundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />
        <Text color={"gray.100"}>Treine a sua mente e seu corpo.</Text>
      </Center>
    </VStack>
  );
}
