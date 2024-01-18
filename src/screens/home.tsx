import { useNavigation } from "@react-navigation/native";
import { Button, Heading, VStack, View } from "native-base";
import Container from "../components/container";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <VStack flex={1} justifyContent="center" alignItems="center" space={5}>
        <Heading>PROJETO - X</Heading>
        <VStack space={3} w="75%" maxW="300px" mx="auto">
          <Button
            onPress={() => navigation.navigate("grower")}
            variant="outline"
            rounded={15}
            borderColor="#1414b8"
            colorScheme="#000000"
          >
            Produtor
          </Button>

          <Button
            onPress={() => navigation.navigate("serviceProvider")}
            variant="outline"
            rounded={15}
            borderColor="#1414b8"
            colorScheme="#000000"
          >
            Prestador de Serviço
          </Button>

          <Button
            onPress={() => navigation.navigate("requestsScreen")}
            variant="outline"
            rounded={15}
            borderColor="#1414b8"
            colorScheme="#000000"
          >
            Requisiçõpes
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
}
