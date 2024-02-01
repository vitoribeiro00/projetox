import {
  VStack,
  ScrollView,
  Text,
  View,
  FlatList,
} from "native-base";
import Container from "../components/container";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import listRequests from "../services/list-request";
import { renderItens } from "../components/renderItens";

export default function RequestsScreen({ navigation }) {
  const [myRequests, setMyRequests] = useState([])
  const getRequests = async () => {
    const requests = await listRequests()
    setMyRequests(requests)
  }

  useEffect(() => {
    getRequests()
  }, [])

  return (
    <Container>
      <Header title="Requisições" />
        <VStack space={3}>
          <FlatList
            data={myRequests}
            renderItem={renderItens}
            />
        </VStack>
    </Container>
  );

}
