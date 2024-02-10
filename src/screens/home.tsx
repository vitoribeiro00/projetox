import { useNavigation } from "@react-navigation/native";
import { Button, Heading, VStack, View } from "native-base";
import Container from "../components/container";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <VStack flex={1} justifyContent="center" alignItems="center" space={5} mx={10}>
        <Heading size="2xl">PROJETO - X</Heading>
        <Button
          w="full"
          size="lg"
          onPress={() => navigation.navigate("grower")}
          variant="outline"
          rounded={15}
          borderColor="#1414b8"
          colorScheme="#000000"
        >
          Produtor
        </Button>

        <Button
          w="full"
          size="lg"
          onPress={() => navigation.navigate("requestsScreen")}
          variant="outline"
          rounded={15}
          borderColor="#1414b8"
          colorScheme="#000000"
        >
          Prestador de Serviço
        </Button>

        <Button
          w="full"
          size="lg"
          onPress={async () => await AsyncStorage.clear()}
          variant="outline"
          rounded={15}
          borderColor="#1414b8"
          colorScheme="#000000"
         
        >
          Limpar AsyncStorage
        </Button>

        </VStack>
    </Container>
  );
}
