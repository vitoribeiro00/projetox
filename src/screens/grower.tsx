import React from "react";

import {
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
import Header from "../components/header";
import { Controller, useForm } from "react-hook-form";
import CreateRequest from "../services/create-request";



export default function GrowerScreen({ navigation }) {
  const { control, handleSubmit, formState: { errors }, reset} = useForm({
    defaultValues: {
      name: '',
      // code: '',
      // owner: '',
      // farm: '',
      // plot: '',
      // operation: '',
      // activity: '',
      // insumo: '',
      // areaHa: '',
    }
  });

  const onSubmit = (data) => {
    CreateRequest(data)
    reset()
  };

  return (
    <Container>
      <Header title="Produtor"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3}>
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text fontSize={16} marginLeft={1}>
                Nome
              </Text>
              <Input
                size="lg"
                variant="rounded"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="name"
        />

          {/* <Text fontSize={16} marginLeft={1}>
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
          <Input size="lg" variant={"rounded"}></Input> */}

          <Button
            onPress={handleSubmit(onSubmit)}
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
      </ScrollView>
    </Container>
  );
}
