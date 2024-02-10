import {
  Input,
  VStack,
  Text,
  HStack,
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

import uuid from 'react-native-uuid';
import StopForm from "../components/stop-form";

export default function ServiceProvider({ navigation, route }) {
  const requestId = route?.params?.requestId;
  
  const [stops, setStops] = useState([]);
  const [viewStopsModal, setViewStopsModal] = useState(false);

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

  const onSubmit = (data) => {
    CreateServiceProvider(requestId, stops, data);
    reset();
  };

  useEffect(() => {
    console.log(stops)
  }, [stops])

  if(requestId === null){
    return(
      <Container>
        <Text>Carregando....</Text>
      </Container>
    )
    
  }

  if(viewStopsModal) {
    return (
      <StopForm setViewStopsModal={setViewStopsModal} setStops={setStops}/>
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
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Data
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
            name="date"
          />

          <Controller
            control={control}
            rules={{
              required: true,
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
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="startTime"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text fontSize={16} marginLeft={1}>
                  Horário Final
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
            name="endTime"
          />

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

          <Controller
            control={control}
            rules={{
              required: true,
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
                />
              </>
            )}
            name="quantHa"
          />

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
                  size='lg'
                  placeholder="Selecione"
                  variant="rounded"
                  selectedValue={value}
                  onValueChange={(itemValue: string) => {
                    onChange(itemValue);
                  }}
                >
                  <Select.Item label="Sim" value="sim"/>
                  <Select.Item label="Não" value="nao"/>
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
