import { useNavigation } from "@react-navigation/native";
import { Button, Center, Heading, VStack, View } from "native-base";
import Container from "../components/container";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <VStack mt={10}>
        <Center>
          <Heading size="2xl" color="#1414b8">LAMMEC</Heading>
          <Heading size="sm" color="#1414b8">Controle de Operações Agrícola</Heading>
        </Center>
      </VStack>
      <VStack flex={1} justifyContent="center" alignItems="center" space={5} mx={10}>
        <Button
          w="full"
          size="md"
          onPress={() => navigation.navigate("grower")}
          rounded={15}
          backgroundColor="#1414b8"
          color="#ffffff"
        >
          Produtor
        </Button>

        <Button
          w="full"
          size="md"
          onPress={() => navigation.navigate("requestsScreen")}
          rounded={15}
          backgroundColor="#1414b8"
          color="#ffffff"
        >
          Prestador de Serviço
        </Button>

        <Button
          w="full"
          size="md"
          onPress={() => navigation.navigate("requestsSyncScreen")}
          rounded={15}
          backgroundColor="#1414b8"
          color="#ffffff"
        >
          Sincronizar Requisições
        </Button>


        {/* <Button
          w="full"
          size="md"
          onPress={async () => await AsyncStorage.clear()}
          rounded={15}
          backgroundColor="#1414b8"
          color="#ffffff"
         
        >
          Limpar AsyncStorage
        </Button> */}

        </VStack>
    </Container>
  );
}
