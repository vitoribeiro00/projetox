import React, { useEffect } from 'react';

import { Text, View, VStack } from "native-base";
import Container from '../components/container';
import Header from '../components/header';

import myRequestToSync from '../services/my-request-to-sync';
import { TouchableOpacity } from 'react-native';
import servicesProviderSync from '../services/services-provider-sync';


export default function RequestSyncScreen(){

  async function uploadRequests() {
    const requests = await myRequestToSync();

    const requestsFinish = requests.filter((requests) => {
      if(requests?.serviceProvider){
        const servicesProviderFinish = JSON.parse(requests.serviceProvider).filter((serviceProvider) => serviceProvider?.plot === "sim")
        if(servicesProviderFinish.length === 0){
          return false
        }
        return true
      }
      return false
    })

    await servicesProviderSync(requestsFinish)
  }

  return (
    <Container>
      <Header title="Sincronizar Requisições" />
      <VStack m={5}>
        <View w="full" height={12} backgroundColor="#1414b8" borderRadius={10} borderWidth={1} p={2} justifyContent="center" alignItems="center">
          <TouchableOpacity onPress={uploadRequests}>
            <Text fontSize={16} color="white">Sincronizar</Text>
          </TouchableOpacity>
        </View>
      </VStack>
    </Container>
  )
}