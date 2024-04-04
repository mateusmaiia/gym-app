import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type InputProps = IInputProps & {
  errorMessage?: string | null;
};
export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {
  //se ele é invalido porque eu quis invalidar ele ou se tem mensagem de erro
  const invalid = !!errorMessage || isInvalid; //!! para transformar em boolean   == se existe conteúdo dentro da variavel então ele é verdadeiro
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        isInvalid={invalid}
        placeholderTextColor="gray.300"
        _invalid={{
          borderColor: "red.500",
          borderWidth: 1,
        }}
        _focus={{
          backgroundColor: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
