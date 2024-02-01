import {
  VStack,
  ScrollView,
  Text,
  View,
  FlatList,
} from "native-base";
import Container from "../components/container";
import React from "react";
import Header from "../components/header";
import { TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import listRequests from "../services/list-request";

export default function RequestsScreen({ navigation }) {

let listRequest = listRequests('requests')

  return (
    <Container>
      <Header title="Requisições" />
        <VStack space={3}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("serviceProvider")}>
            <View w="full" borderColor="black" borderWidth={1} borderRadius={10} padding={2} flex={1}  flexDirection="row" justifyContent="space-between">
              <Text>Requisição 1</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>
            <FlatList
            data={listRequest}
            />
          </TouchableWithoutFeedback>
        </VStack>
    </Container>
  );
}
