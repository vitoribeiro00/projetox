import React, { useEffect, useState } from "react";

import { VStack, FlatList, Text, View, Center, HStack, IconButton } from "native-base";

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
        borderColor="#1414b8"
        borderWidth={2}
        borderRadius={10}
        p={2}
        my={3}
      >
        <View maxW="80">
          <Text>Cliente: {request?.name}</Text>
          <Text>Fazenda: {request?.farm}</Text>
          <Text>Talhão: {request?.plot}</Text>
          <Text>Operação(ões): {request?.operation?.join(", ") || request?.operation}</Text>
          <Text>Atividade(s): {request?.activity?.join(", ") || request?.activity}</Text>
        </View>
        <View>
          <AntDesign
            name="right"
            size={28}
            color="#1414b8"
            onPress={() =>
              navigation.navigate(
                "serviceProvider",
                { requestId: request.id, requestOperation: request.operation },
              )
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
