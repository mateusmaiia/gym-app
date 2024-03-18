import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

export type ButtonProps = IButtonProps & {
  title: string;
};
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      h={14}
      bg="green.700"
      {...rest}
      rounded="sm"
      _pressed={{ backgroundColor: "green.500" }}
    >
      <Text fontSize="sm" fontFamily="heading" color="white">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
