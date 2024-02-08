import React, { useEffect, useState } from "react";

import {
  VStack,
  FlatList,
  Text,
  HStack,
  View,
} from "native-base";

import { useNavigation } from "@react-navigation/native";

import Container from "../components/container";
import Header from "../components/header";
import listRequests from "../services/list-request";
import { Request } from "../models/request-model";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function RequestsScreen({navigation}) {

  
  const [myRequests, setMyRequests] = useState([])
  const getRequests = async () => {
    const requests = await listRequests()
    console.log(requests)
    if(requests){
      setMyRequests(requests)
    }
  }

  useEffect(() => {
    getRequests()
  }, [])

  const requestItem = (request: Request) => {
    console.log(request)
    return (
      
        <VStack flex={1} flexDirection="row" alignItems="center" justifyContent="space-between" borderColor="black" borderWidth={2} borderRadius={10} p={3} my={2}>
          <View>
            <Text>Cliente: {request?.name}</Text>
            <Text>Fazenda: {request?.farm}</Text>
            <Text>Talhão: {request?.plot}</Text>
            <Text>Operação: {request?.operation}</Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="black" onPress={() => navigation.navigate("serviceProvider")} />
          </View>
          
        </VStack>

      
    )
  }

  return (
    <Container>
      <Header title="Requisições" />
        <VStack space={3} mx={5} my={2}>
         <FlatList 
            data={myRequests}
            renderItem={({ item }) => requestItem(item)}
         />
        </VStack>
    </Container>
  );

}
