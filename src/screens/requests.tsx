import {
  Center,
  Heading,
  VStack,
  ScrollView,
  Button,
  ChevronRightIcon,
} from "native-base";
import Container from "../components/container";
import React from "react";

export default function RequestsScreen({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <VStack space={3}>
          <Center marginBottom={5}>
            <Heading>Controle de Paradas</Heading>
          </Center>

          <VStack space={1} w="75%" maxW="300px" mx="auto">
            <Button
              onPress={() => navigation.navigate("requestsScreen")}
              variant="outline"
              rightIcon={<ChevronRightIcon color={"black"} />}
              rounded={15}
              borderColor="#1414b8"
              colorScheme="#000000"
              marginBottom={5}
            >
              Requisição 1
            </Button>

            <Button
              onPress={() => navigation.navigate("requestsScreen")}
              variant="outline"
              rightIcon={<ChevronRightIcon color={"black"} />}
              rounded={15}
              borderColor="#1414b8"
              colorScheme="#000000"
              marginBottom={5}
            >
              Requisição 2
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
}
