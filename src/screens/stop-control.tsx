import {
  Center,
  Heading,
  Input,
  VStack,
  Text,
  HStack,
  ScrollView,
  Button,
} from "native-base";
import Container from "../components/container";
import React from "react";

export default function StopControl({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <VStack space={3}>
          <Center>
            <Heading>Controle de Paradas</Heading>
          </Center>

          <HStack>
            <Text fontSize={16} marginLeft="14%">
              Código 1
            </Text>
            <Text fontSize={16} marginLeft="23%">
              Nº da requisição: 2
            </Text>
          </HStack>

          <VStack space={1} w="75%" maxW="300px" mx="auto">
            <Text fontSize={16} marginLeft={1}>
              Motivo
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Horário Inicio
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Horario Final
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Button
              onPress={() => navigation.navigate("stopControl")}
              variant="outline"
              rounded={15}
              borderColor="#1414b8"
              colorScheme="#000000"
              marginTop={5}
              marginBottom={5}
            >
              Salvar
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
}
