import {
  Input,
  VStack,
  Text,
  Select,
  ScrollView,
  Button,
  Center,
} from "native-base";
import Container from "../components/container";
import React, { useEffect, useState } from "react";
import Header from "../components/header";

import { Controller, useForm } from "react-hook-form";
import CreateServiceProvider from "../services/create-service-provider";

import uuid from "react-native-uuid";
import StopForm from "../components/stop-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useToast } from "react-native-toast-notifications";

export default function ServiceProvider({ navigation, route }) {
  const requestId = route?.params?.requestId;

  const [stops, setStops] = useState([]);
  const [viewStopsModal, setViewStopsModal] = useState(false);

  const [isDateVisible, setDateVisibility] = useState(false);
  const [isStartTimeVisible, setStartTimeVisibility] = useState(false);
  const [isEndTimeVisible, setEndTimeVisibility] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const currentDate = new Date();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id: uuid.v4(),
      date: "",
      operator: "",
      machine: "",
      equipment: "",
      startTime: "",
      endTime: "",
      insumo: "",
      quantHa: "",
      plot: "",
    },
  });

  const isValidInputNumeric = (text) => {
    return !isNaN(text);
  };

  const isValidInputText = (text) => {
    return isNaN(text);
  };

  const onSubmit = (data) => {
    CreateServiceProvider(requestId, stops, data);
    reset();
    toast.show("Controle de Serviços salvo com sucesso!", {
      placement: "top",
      type: "success",
      duration: 2000,
    });
  };

  useEffect(() => {
    console.log(stops);
  }, [stops]);

  if (requestId === null) {
    return (
      <Container>
        <Text>Carregando....</Text>
      </Container>
    );
  }

  if (viewStopsModal) {
    return (
      <StopForm setViewStopsModal={setViewStopsModal} setStops={setStops} />
    );
  }

  return (
    <Container>
      <Header title="Controle de Serviços" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3} mx={2} mt={2}>
          <Center>
            <Text>Nº da requisição</Text>
          </Center>
          <Center>
            <Text fontSize={16}> {`${requestId}`}</Text>
          </Center>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Data
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  value={value.toString()}
                  onTouchStart={() => {
                    setDateVisibility(true);
                  }}
                />
                <DateTimePickerModal
                  isVisible={isDateVisible}
                  mode="date"
                  onConfirm={(date) => {
                    onChange(
                      date.toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                    );
                    setSelectedDate(date);
                    setDateVisibility(false);
                  }}
                  onCancel={() => {
                    setDateVisibility(false);
                  }}
                  minimumDate={currentDate}
                />
              </>
            )}
            name="date"
          />
          {errors.date && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento.</Text>
          )}

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
                  Operador
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
            name="operator"
          />
          {errors.operator && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento. Somente letras.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Máquina
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
            name="machine"
          />
          {errors.machine && (
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
                  Equipamento
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
            name="equipment"
          />
          {errors.equipment && (
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
                  Horário Inicial
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  value={value.toString()}
                  onTouchStart={() => {
                    setStartTimeVisibility(true);
                  }}
                />
                <DateTimePickerModal
                  isVisible={isStartTimeVisible}
                  mode="time"
                  onConfirm={(startTime) => {
                    onChange(
                      startTime.toLocaleTimeString("pt-BR", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      })
                    );
                    setSelectedStartTime(startTime);
                    setStartTimeVisibility(false);
                  }}
                  onCancel={() => {
                    setStartTimeVisibility(false);
                  }}
                />
              </>
            )}
            name="startTime"
          />
          {errors.startTime && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento.</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Horário Final
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  value={value.toString()}
                  onTouchStart={() => {
                    setEndTimeVisibility(true);
                  }}
                />
                <DateTimePickerModal
                  isVisible={isEndTimeVisible}
                  mode="time"
                  onConfirm={(endTime) => {
                    onChange(
                      endTime.toLocaleTimeString("pt-BR", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      })
                    );
                    setSelectedEndTime(endTime);
                    setEndTimeVisibility(false);
                  }}
                  onCancel={() => {
                    setEndTimeVisibility(false);
                  }}
                />
              </>
            )}
            name="endTime"
          />
          {errors.endTime && (
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
                  Quant. /ha
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
            name="quantHa"
          />
          {errors.quantHa && (
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
                  Fim de talhão?
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
                  <Select.Item label="Sim" value="sim" />
                  <Select.Item label="Não" value="nao" />
                </Select>
              </>
            )}
            name="plot"
          />
          {errors.plot && (
            <Text style={{ color: "red" }}>É obrigatório o preenchimento.</Text>
          )}

          <Button
            onPress={() => setViewStopsModal(true)}
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
            onPress={handleSubmit(onSubmit)}
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
      </ScrollView>
    </Container>
  );
}
