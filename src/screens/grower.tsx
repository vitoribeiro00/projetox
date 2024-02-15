import React from "react";

import {
  VStack,
  Input,
  Text,
  Button,
  ScrollView,
  FormControl,
  Select,
  CheckIcon,
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
      owner: "",
      farm: "",
      plot: "",
      operation: "",
      activity: "",
      insumo: "",
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
    CreateRequest(data);
    reset();
    toast.show("Requisição criada com sucesso!", {
      placement: "top",
      type: "success",
      duration: 2000,
    });
  };

  return (
    <Container>
      <Header title="Produtor" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3} mx={2} mt={2}>
          <Controller
            control={control}
            rules={{
              required: true,
              validate: {
                validInput: (value) =>
                  isValidInputText(value),
              },
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
                  keyboardType="default"
                />
              </>
            )}
            name="name"
          />
          {errors.name && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento. Somente letras.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              validate: {
                validInput: (value) =>
                  isValidInputNumeric(value),
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Número de Inscrição
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
          {errors.code && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento. Somente números.</Text>
          )}

          {/* <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Área de:
                </Text>
                <Select
                  size="lg"
                  placeholder="Selecione"
                  variant="rounded"
                  selectedValue={value}
                  onValueChange={(itemValue: string) => {
                    onChange(itemValue);
                  }}
                >
                  <Select.Item label="Empresa" value="empresa" />
                  <Select.Item label="Terceiro" value="terceiro" />
                </Select>
              </>
            )}
            name="owner"
          /> */}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Fazenda
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
          {errors.farm && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true ||"É obrigatório o preenchimento.",
              validate: {
                validInput: (value) =>
                  isValidInputNumeric(value),
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Talhão
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
            name="plot"
          />
          {errors.plot && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento. Somente números.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Operação
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
            name="operation"
          />
          {errors.operation && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
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
          {errors.activity && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Insumo
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
            name="insumo"
          />
          {errors.insumo && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              validate: {
                validInput: (value) =>
                  isValidInputNumeric(value),
              },
            }}
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
          {errors.areaHa && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento. Somente números.</Text>
          )}

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
