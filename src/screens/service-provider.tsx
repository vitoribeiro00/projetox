import {
  Center,
  Heading,
  Input,
  VStack,
  Text,
  HStack,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  ScrollView,
  Button,
} from "native-base";
import Container from "../components/container";
import React from "react";

export default function ServiceProvider({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <VStack space={3}>
          <Center>
            <Heading>Prestador</Heading>
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
              Data
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Operador
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Máquina
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Equipamento
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Horário Inicial
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Horário Final
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Insumo
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Quant. /ha
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <FormControl isRequired isInvalid>
              <FormControl.Label>Fim de talhão? </FormControl.Label>
              <Select
                variant="rounded"
                minWidth="200"
                accessibilityLabel="Selecione"
                placeholder="Selecione"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1"
              >
                <Select.Item label="Sim" value="company" />
                <Select.Item label="Não" value="third" />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Por favor, selecione!
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              onPress={() => navigation.navigate("stopControl")}
              variant="outline"
              rounded={15}
              borderColor="#1414b8"
              colorScheme="#000000"
              marginTop={5}
              marginBottom={3}
            >
              Informar Paradas
            </Button>

            <Button
              onPress={() => navigation.navigate("serviceProvider")}
              variant="outline"
              rounded={15}
              borderColor="#1414b8"
              colorScheme="#000000"
              marginTop={2}
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
