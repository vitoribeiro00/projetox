import React from "react";

import {
  VStack,
  Input,
  Text,
  Button,
  ScrollView,
  View,
  Checkbox,
} from "native-base";

import { Controller, useForm } from "react-hook-form";

import { useToast } from "react-native-toast-notifications";

import Container from "../components/container";
import Header from "../components/header";
import CreateRequest from "../services/create-request";
import uuid from "react-native-uuid";

export default function GrowerScreen({ navigation }) {
  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id: uuid.v4(),
      name: "",
      code: "",
      farm: "",
      farmAdress: "",
      plot: "",
      plotCoordinate: "",
      operation: "",
      activity: "",
      areaHa: "",
    },
  });

  const isValidInputNumeric = (text) => {
    return !isNaN(text);
  };

  const isValidInputText = (text) => {
    return isNaN(text);
  };

  const onSubmit = (data) => {
    try {
      if (
        data.name === "" ||
        data.code === "" ||
        data.farm === "" ||
        data.farmAdress === "" ||
        data.plot === "" ||
        data.plotCoordinate === "" ||
        // data.operation === "" ||
        data.activity === "" ||
        data.areaHa === ""
      ){
        throw new Error("Todas as informações são obrigatórias.");
      }
      if(!isNaN(data.name)) throw new Error("O nome deve ser composto por letras, apenas.");
      if(isNaN(data.code)) throw new Error("O CPF ou CNPJ deve ser composto por números, apenas.");
        

      CreateRequest(data);
      reset();
      toast.show("Requisição criada com sucesso!", {
        placement: "top",
        type: "success",
        duration: 3000,
      });
      navigation.goBack();
    } catch (error) {
      toast.show(error.message, {
        placement: "top",
        type: "danger",
        duration: 2000,
      });
    }
  };

  return (
    <Container>
      <Header title="Produtor" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3} mx={2} mt={2} mb={2}>
          <Controller
            control={control}
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
                  keyboardType="default"
                />
              </>
            )}
            name="name"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  CPF / CNPJ
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              </>
            )}
            name="code"
          />
        </VStack>

        <View
          style={{ borderBottomWidth: 2, borderBottomColor: "black" }}
          mt={2}
        />

        <VStack space={3} mx={2} mt={2} mb={2}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Código/Nome da Fazenda
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="default"
                />
              </>
            )}
            name="farm"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Endereço da Fazenda:
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="default"
                />
              </>
            )}
            name="farmAdress"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Código/Nome do Talhão
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="default"
                />
              </>
            )}
            name="plot"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Coordenada do Talhão
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="default"
                />
              </>
            )}
            name="plotCoordinate"
          />
        </VStack>

        <View
          style={{ borderBottomWidth: 2, borderBottomColor: "black" }}
          mt={2}
        />

        <VStack space={3} mx={2} mt={2} mb={2}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={0} marginBottom={2}>
                  Selecione as Operações:
                </Text>
                {/* <Checkbox.Group
                  onChange={onChange}
                  value={value}
                >
                  <Checkbox value="Araçao" marginBottom={1}>Aração (com arado ou grade aradora)</Checkbox>
                  <Checkbox value="Gradagem" marginBottom={1}>Gradagem</Checkbox>
                  <Checkbox value="Subsolagem" marginBottom={1}>Subsolagem</Checkbox>
                  <Checkbox value="Escarificação" marginBottom={1}>Escarificação</Checkbox>
                  <Checkbox value="Aplicação mecanizada de corretivos" marginBottom={1}>Aplicação mecanizada de corretivos</Checkbox>
                </Checkbox.Group> */}
              </>
            )}
            name="operation"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Atividade
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="default"
                />
              </>
            )}
            name="activity"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Área(ha)
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              </>
            )}
            name="areaHa"
          />
        </VStack>

        <View
          style={{ borderBottomWidth: 2, borderBottomColor: "black" }}
          mt={2}
        />

        <VStack space={3} mx={2}>
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
