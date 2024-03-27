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

  const onSubmit = (data) => {
    try {
      if (
        data.name === "" ||
        data.code === "" ||
        data.farm === "" ||
        data.farmAdress === "" ||
        data.plot === "" ||
        data.plotCoordinate === "" ||
        data.operation === "" ||
        data.activity === "" ||
        data.areaHa === ""
      ){
        throw new Error("Todas as informações são obrigatórias.");
      }
      if(!isNaN(data.name)) throw new Error("O Nome deve ser composto por letras, apenas.");
      if(isNaN(data.code)) throw new Error("O CPF / CNPJ deve ser composto por números, apenas.");
      if(isNaN(data.areaHa)) throw new Error("A área deve ser composta por números, apenas.");
      

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
        duration: 3000,
      });
    }
  };

  return (
    <Container>
      <Header title="Produtor" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text fontSize={16} mt={2} ml={2} fontWeight={700} color="#1414b8">Dados do cliente: </Text>
        <VStack space={3} m={2} p={2} borderWidth={1} borderColor="#1414b8" borderRadius={5}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1} marginTop={1} color="#1414b8">
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
                <Text fontSize={16} marginLeft={1} color="#1414b8">
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

        <Text fontSize={16} mt={2} ml={2} fontWeight={700} color="#1414b8">Dados da propriedade: </Text>
        <VStack space={3} m={2} p={2} borderWidth={1} borderColor="#1414b8" borderRadius={5}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1} marginTop={1} color="#1414b8">
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
                <Text fontSize={16} marginLeft={1} color="#1414b8">
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
                <Text fontSize={16} marginLeft={1} color="#1414b8">
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
                <Text fontSize={16} marginLeft={1} color="#1414b8">
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

          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <>
                <Text fontSize={16} marginBottom={2} color="#1414b8">
                  Selecione atividades:
                </Text>
                <Checkbox.Group
                  onChange={(values) => {
                    onChange(values);
                  }}
                >
                  <Checkbox value="Arroz" marginBottom={1}>Arroz</Checkbox>
                  <Checkbox value="Banana" marginBottom={1}>Banana</Checkbox>
                  <Checkbox value="Chá" marginBottom={1}>Chá</Checkbox>
                  <Checkbox value="Hortaliças" marginBottom={1}>Hortaliças</Checkbox>
                  <Checkbox value="Milho" marginBottom={1}>Milho</Checkbox>
                  <Checkbox value="Milho Verde" marginBottom={1}>Milho Verde</Checkbox>
                  <Checkbox value="Milho verde/silagem" marginBottom={1}>Milho verde/silagem</Checkbox>
                  <Checkbox value="Pastagem" marginBottom={1}>Pastagem</Checkbox>
                  <Checkbox value="Plantas ornamentais" marginBottom={1}>Plantas ornamentais</Checkbox>
                  <Checkbox value="Pupunha" marginBottom={1}>Pupunha</Checkbox>
                </Checkbox.Group>
              </>
            )}
            name="activity"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1} color="#1414b8">
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

        <Text fontSize={16} mt={2} ml={2} fontWeight={700} color="#1414b8">Dados da serviços serão prestados: </Text>
        <VStack space={3} m={2} p={2} borderWidth={1} borderColor="#1414b8" borderRadius={5}>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <>
                <Text fontSize={16} marginBottom={2} marginTop={1} color="#1414b8">
                  Selecione operações:
                </Text>
                <Checkbox.Group
                  onChange={(values) => {
                    onChange(values);
                  }}
                >
                  <Checkbox value="Araçao" marginBottom={1}>Aração (com arado ou grade aradora)</Checkbox>
                  <Checkbox value="Gradagem" marginBottom={1}>Gradagem</Checkbox>
                  <Checkbox value="Subsolagem" marginBottom={1}>Subsolagem</Checkbox>
                  <Checkbox value="Escarificação" marginBottom={1}>Escarificação</Checkbox>
                  <Checkbox value="Aplicação mecanizada de corretivos" marginBottom={1}>Aplicação mecanizada de corretivos</Checkbox>
                  <Checkbox value="Aplicação mecanizada de Fertilizantes" marginBottom={1}>Aplicação mecanizada de Fertilizantes</Checkbox>
                  <Checkbox value="Semeadura mecanizada" marginBottom={1}>Semeadura mecanizada</Checkbox>
                  <Checkbox value="Pulverização mecanizada" marginBottom={1}>Pulverização mecanizada</Checkbox>
                  <Checkbox value="Colheita mecanizada" marginBottom={1}>Colheita mecanizada</Checkbox>
                  <Checkbox value="Colheita de silagem" marginBottom={1}>Colheita de silagem</Checkbox>
                  <Checkbox value="Transporte" marginBottom={1}>Transporte</Checkbox>
                  <Checkbox value="Manutenção de área/cultura" marginBottom={1}>Manutenção de área/cultura</Checkbox>
                </Checkbox.Group>
              </>
            )}
            name="operation"
          />

          
        </VStack>


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
