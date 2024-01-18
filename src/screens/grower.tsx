import {
  Center,
  Heading,
  VStack,
  Input,
  Text,
  Button,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  ScrollView,
} from "native-base";
import Container from "../components/container";
import React from "react";

export default function GrowerScreen({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <VStack space={3}>
          <Center>
            <Heading>Produtor</Heading>
          </Center>

          <VStack space={1} w="75%" maxW="300px" mx="auto">
            <Text fontSize={16} marginLeft={1}>
              Nome
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Número de Inscrição
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <FormControl isRequired isInvalid>
              <FormControl.Label>Área de: </FormControl.Label>
              <Select
                variant="rounded"
                minWidth="200"
                accessibilityLabel="Escolha o serviço"
                placeholder="Escolha o serviço"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1"
              >
                <Select.Item label="Empresa" value="company" />
                <Select.Item label="Terceiro" value="third" />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Por favor, selecione!
              </FormControl.ErrorMessage>
            </FormControl>

            <Text fontSize={16} marginLeft={1}>
              Fazenda
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Talhão
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Operação
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Atividade
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Insumo
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Text fontSize={16} marginLeft={1}>
              Área(ha)
            </Text>
            <Input size="lg" variant={"rounded"}></Input>

            <Button
              onPress={() => navigation.navigate("grower")}
              variant="outline"
              rounded={15}
              borderColor={"#1414b8"}
              colorScheme={"#000000"}
              marginTop={5}
              marginBottom={5}
            >
              Requisistar
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
}
