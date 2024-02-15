import {
  Input,
  VStack,
  Text,
  HStack,
  ScrollView,
  Button,
  Heading,
} from "native-base";
import Container from "../components/container";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Controller, useForm } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

export default function StopForm({ setViewStopsModal, setStops }) {
  const [isStartTimeVisible, setStartTimeVisibility] = useState(false);
  const [isEndTimeVisible, setEndTimeVisibility] = useState(false);

  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      reason: "",
      startTime: "",
      endTime: "",
    },
  });

  const onSubmit = (data) => {
    setStops((stops) => [...stops, data]);
    setViewStopsModal(false);
    reset();
  };

  return (
    <Container>
      <VStack
        w="full"
        backgroundColor="black"
        py={5}
        px={2}
        flexDirection="row"
        alignItems="center"
      >
        <AntDesign
          name="left"
          size={24}
          color="white"
          onPress={() => setViewStopsModal(false)}
          style={{ marginRight: 10 }}
        />
        <Heading color="white">Controle de paradas</Heading>
      </VStack>
      <ScrollView>
        <VStack space={3} mx={2} mt={2}>
          <HStack>
            <Text fontSize={16} marginLeft="14%">
              Código 1
            </Text>
            <Text fontSize={16} marginLeft="23%">
              Nº da requisição: 2
            </Text>
          </HStack>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Motivo
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
            name="reason"
          />
          {errors.reason && (
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
                  Horário Inicio
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
                  value={value}
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

          <Button
            onPress={handleSubmit(onSubmit)}
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
      </ScrollView>
    </Container>
  );
}