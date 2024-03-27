import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home";
import GrowerScreen from "../screens/grower";
import ServiceProviderScreen from "../screens/service-provider";
import RequestsScreen from "../screens/requests";
import RequestSync from "../screens/requests-sync";
import RequestSyncScreen from "../screens/requests-sync";

const Stack = createNativeStackNavigator();

export default function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="grower"
          component={GrowerScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="serviceProvider"
          component={ServiceProviderScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="requestsScreen"
          component={RequestsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="requestsSyncScreen"
          component={RequestSyncScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
