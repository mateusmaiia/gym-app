import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgorundImg from "../assets/background.png";
import LogoSvg from "../assets/logo.svg";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";

export function SignUp() {
  return (
    // FlexGrow: 1 pra por padrão ocupar todo o tamanho da tela,     junto também com o pb={16} da VStack, para dar mais tamanho a tela.
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
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
            Crie sua conta
          </Heading>
        </Center>
        <Input placeholder="Nome" />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirmar senha" secureTextEntry />

        <Button title="Criar e acessar" />
        <Button mt={24} title="Voltar para o login" variant="outline" />
      </VStack>
    </ScrollView>
  );
}
