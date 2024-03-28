import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard() {
  return (
    <HStack px={5} py={4} mb={3} bg="gray.600" alignItems="center" rounded="md">
      <VStack flex={1}>
        <Heading
          flex={1}
          color="#fff"
          fontSize="md"
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md">
        08:54
      </Text>
    </HStack>
  );
}
