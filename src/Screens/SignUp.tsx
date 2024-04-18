import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgorundImg from '../assets/background.png'
import LogoSvg from '../assets/logo.svg'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'
import { useNavigation } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import { api } from '../Services/api'

const signUpSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve conter no mínimo 8 caracteres')
    .required('Senha obrigatória'),
  password_confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmação de senha obrigatória'),
})

type FormProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

export function SignUp() {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(signUpSchema),
  })

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleSignUp({
    email,
    name,
    password,
    password_confirm,
  }: FormProps) {
    try {
      const response = await api.post('/users', {
        email,
        name,
        password,
      })

      console.log(response.data)
    } catch (error) {}
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
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
            color={'gray.100'}
            fontFamily={'heading'}
            mb={6}
            fontSize={'xl'}
          >
            Crie sua conta
          </Heading>
        </Center>

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
          name="name"
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          name="password_confirm"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirmar senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType="send"
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />

        <Button title="Criar e acessar" onPress={handleSubmit(handleSignUp)} />
        <Button
          onPress={handleGoBack}
          mt={24}
          title="Voltar para o login"
          variant="outline"
        />
      </VStack>
    </ScrollView>
  )
}
