import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

export type ButtonProps = IButtonProps & {
  title: string;
};
export function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        backgroundColor: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={variant === "outline" ? "green.500" : "white"}
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
