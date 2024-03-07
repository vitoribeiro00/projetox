import {
  Input,
  VStack,
  Text,
  Select,
  ScrollView,
  Button,
  Center,
  IconButton,
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
import { MaterialIcons } from "@expo/vector-icons";

export default function ServiceProvider({ navigation, route }) {
  const requestId = route?.params?.requestId;
  const requestOperation = route?.params?.requestOperation;

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
      quantHa: "",
      plot: "",
      operation: "",
    },
  });

  const onSubmit = (data) => {
    try {
      if (
        data.date === "" ||
        data.operator === "" ||
        data.machine === "" ||
        data.equipment === "" ||
        data.startTime === "" ||
        data.endTime === "" ||
        data.quantHa === "" ||
        data.plot === "" ||
        data.operation === ""
      ) {
        throw new Error("Todas as informações são obrigatórias.");
      }

      if (
        new Date("01-01-1970 " + data.endTime + ":00").getTime() <
        new Date("01-01-1970 " + data.startTime + ":00").getTime()
      ) {
        throw new Error("O horario final precisa ser maior que o inicial.");
      }

      CreateServiceProvider(requestId, stops, data);
      reset();
      toast.show("Controle de Serviços salvo com sucesso!", {
        placement: "top",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      toast.show(error.message, {
        placement: "top",
        type: "danger",
        duration: 3000,
      });
    }
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
            <Text> {`${requestId}`}</Text>
            <Text> {`${requestOperation}`}</Text>
          </Center>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Data
                </Text>
                <Input
                  size={"lg"}
                  variant={"rounded"}
                  isDisabled
                  borderColor={"gray.400"}
                  value={value.toString()}
                  placeholder={"Selecione a Data."}
                  placeholderTextColor={"black"}
                  InputRightElement={
                    <IconButton
                      size={"lg"}
                      variant={"ghost"}
                      _icon={{
                        as: MaterialIcons,
                        name: "calendar-today",
                        color: "black",
                      }}
                      onPress={() => {
                        setDateVisibility(true);
                      }}
                    ></IconButton>
                  }
                />
                <DateTimePickerModal
                  isVisible={isDateVisible}
                  mode="date"
                  locale="pt"
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

          <Controller
            control={control}
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

          <Controller
            control={control}
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

          <Controller
            control={control}
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

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Horário Inicial
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  isDisabled
                  borderColor={"gray.400"}
                  value={value.toString()}
                  placeholder={"Selecione o Horário Inicial."}
                  placeholderTextColor={"black"}
                  InputRightElement={
                    <IconButton
                      size={"lg"}
                      variant={"ghost"}
                      _icon={{
                        as: MaterialIcons,
                        name: "timer",
                        color: "black",
                      }}
                      onPress={() => {
                        setStartTimeVisibility(true);
                      }}
                    ></IconButton>
                  }
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

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Horário Final
                </Text>
                <Input
                  size="lg"
                  variant="rounded"
                  isDisabled
                  borderColor={"gray.400"}
                  placeholder={"Selecione o Horário Final."}
                  placeholderTextColor={"black"}
                  value={value.toString()}
                  InputRightElement={
                    <IconButton
                      size={"lg"}
                      variant={"ghost"}
                      _icon={{
                        as: MaterialIcons,
                        name: "timer",
                        color: "black",
                      }}
                      onPress={() => {
                        setEndTimeVisibility(true);
                      }}
                    ></IconButton>
                  }
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

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Operações realizadas:
                </Text>
                
              </>
            )}
            name="operation"
          />

          <Controller
            control={control}
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

          <Controller
            control={control}
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
