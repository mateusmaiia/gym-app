import { Center, Heading, VStack, SectionList, Text } from "native-base";
import { ScreenHeader } from "../Components/ScreenHeader";
import { HistoryCard } from "../Components/HistoryCard";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Contas", "Puxada frontall"],
    },
    {
      title: "28.08.22",
      data: ["Puxada frontal", "Remada unilateral"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading fontSize="sm" mt="10" mb={3} color="gray.100">
            {title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0 && { justifyContent: "center", flex: 1 }
        }
        ListEmptyComponent={() => (
          <Text color={"gray.100"} textAlign={"center"}>
            Não há exercícios registrados ainda. {"\n"}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        px={8}
      />
    </VStack>
  );
}
