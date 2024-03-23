import { Center, Heading, VStack, SectionList } from "native-base";
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
          <Heading fontSize="sm" mt="8" pb="4" color="gray.100">
            {title}
          </Heading>
        )}
        px={8}
      />
    </VStack>
  );
}
