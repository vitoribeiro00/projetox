import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Request } from "../models/requestModel";

export const renderItens = ({item}) => (
  <TouchableOpacity >
    <Text>{item.name}</Text>
    <Text>{item.code}</Text>
    <Text>{item.owner}</Text>
    <Text>{item.farm}</Text>
    <Text>{item.plot}</Text>
    <Text>{item.operation}</Text>
    <Text>{item.activity}</Text>
    <Text>{item.insumo}</Text>
    <Text>{item.areaHa}</Text>
  </TouchableOpacity>
  )
