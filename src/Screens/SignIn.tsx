import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgorundImg from "../assets/background.png";
import LogoSvg from "../assets/logo.svg";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";

export function SignIn() {
  return (
    // FlexGrow: 1 pra por padrão ocupar todo o tamanho da tela,     junto também com o pb={16} da VStack, para dar mais tamanho a tela.
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} pb={16}>
        {/* Background */}
        <Image
          source={BackgorundImg}
          defaultSource={BackgorundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color={"gray.100"}
            fontFamily={"heading"}
            mb={6}
            fontSize={"xl"}
          >
            Acesse sua conta
          </Heading>
        </Center>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" />
        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
        </Center>
        <Button title="Criar conta" variant="outline" />
      </VStack>
    </ScrollView>
  );
}
