
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ServiceProvider } from "../models/service-provider-model";
import { Request } from "../models/request-model";

export default async function CreateServiceProvider(requestId: string, newServiceProvider: ServiceProvider) {
  const requestsStorage = await AsyncStorage.getItem('requests');

  const requestsNotUpdate = JSON.parse(requestsStorage).filter((request: Request) => requestId !== request.id);

  const requestToUpdated = JSON.parse(requestsStorage).filter((request: Request) => requestId === request.id);

  if(requestToUpdated.length == 0) throw new Error("Requisição não encontrada")

  let serviceProvider = requestToUpdated[0]?.serviceProvider 

  if(serviceProvider){
    serviceProvider = [...JSON.parse(serviceProvider), {
      id: newServiceProvider.id,
      date: newServiceProvider.date,
      operator: newServiceProvider.operator,
      machine: newServiceProvider.machine,
      equipment: newServiceProvider.equipment,
      startTime: newServiceProvider.startTime,
      endTime: newServiceProvider.endTime,
      insumo: newServiceProvider.insumo,
      quantHa: newServiceProvider.quantHa,
      plot: newServiceProvider.plot
    }];
  } else {
    serviceProvider = [{
      id: newServiceProvider.id,
      date: newServiceProvider.date,
      operator: newServiceProvider.operator,
      machine: newServiceProvider.machine,
      equipment: newServiceProvider.equipment,
      startTime: newServiceProvider.startTime,
      endTime: newServiceProvider.endTime,
      insumo: newServiceProvider.insumo,
      quantHa: newServiceProvider.quantHa,
      plot: newServiceProvider.plot
    }]
  }

  const requestUpdated = {...requestToUpdated[0], serviceProvider: JSON.stringify(serviceProvider)}

  if(requestsNotUpdate.length > 0){
    await AsyncStorage.setItem('requests', JSON.stringify(requestsNotUpdate.push(requestUpdated)));
  } else {
    await AsyncStorage.setItem('requests', JSON.stringify([requestUpdated]));
  }
  
}