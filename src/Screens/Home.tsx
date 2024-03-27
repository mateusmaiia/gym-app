import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { HomeHeader } from "../Components/HomeHeader";
import { Group } from "../Components/Group";
import { useState } from "react";
import { ExerciseCard } from "../Components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "../routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombro",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada unilateral",
    "Remada curvada",
    "Puxada alta",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");

  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={
                groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
              }
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          my={10}
          maxH={10}
        />
      </HStack>
      <VStack flex={1} px={8} mb={5}>
        <HStack justifyContent="space-between" mb={4}>
          <Heading color="gray.200" fontSize={"md"}>
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize={"sm"}>
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
