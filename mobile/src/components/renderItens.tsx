import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const renderItens = ({item}) => (
  <TouchableOpacity >
    <Text>{item.name}</Text>
    <Text>{item.code}</Text>
    <Text>{item.farm}</Text>
    <Text>{item.plot}</Text>
    <Text>{item.operation}</Text>
    <Text>{item.activity}</Text>
    <Text>{item.insumo}</Text>
    <Text>{item.areaHa}</Text>
  </TouchableOpacity>
  )
