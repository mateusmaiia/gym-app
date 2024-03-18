import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

export type ButtonProps = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};
export function Button({ title, variant = "solid", ...rest }: ButtonProps) {
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
