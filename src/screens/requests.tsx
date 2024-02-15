import React, { useEffect, useState } from "react";

import { VStack, FlatList, Text, View, Center } from "native-base";

import Container from "../components/container";
import Header from "../components/header";
import listRequests from "../services/list-request";
import { Request } from "../models/request-model";
import { AntDesign } from "@expo/vector-icons";

export default function RequestsScreen({ navigation }) {
  const [myRequests, setMyRequests] = useState([]);
  const getRequests = async () => {
    const requests = await listRequests();
    if (requests) {
      setMyRequests(requests);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  const requestItem = (request: Request) => {
    return (
      <VStack
        flex={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderColor="black"
        borderWidth={2}
        borderRadius={10}
        p={3}
        my={2}
      >
        <View>
          <Text>Id: {request?.id}</Text>
          <Text>Cliente: {request?.name}</Text>
          <Text>Fazenda: {request?.farm}</Text>
          <Text>Talhão: {request?.plot}</Text>
          <Text>Operação: {request?.operation}</Text>
        </View>
        <View>
          <AntDesign
            name="right"
            size={24}
            color="black"
            onPress={() =>
              navigation.navigate("serviceProvider", { requestId: request.id })
            }
          />
        </View>
      </VStack>
    );
  };

  return (
    <Container>
      <Header title="Requisições" />
      <VStack space={3} mx={5} my={2}>
        <FlatList
          data={myRequests}
          renderItem={({ item }) => requestItem(item)}
          ListEmptyComponent={() => (
            <Center>
              <Text>Nenhuma requisição encontrada</Text>
            </Center>
          )}
        />
      </VStack>
    </Container>
  );
}
