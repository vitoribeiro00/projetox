import AsyncStorage from "@react-native-async-storage/async-storage"
import { Request } from "../models/request-model"


export default async function listRequests(): Promise<any[]> {
  const requests = await AsyncStorage.getItem('requests')
  if(!requests) return null
  return JSON.parse(requests).map((request: any) => {
    return {
      id: request.id,
      name: request.name,
      code: request.code,
      owner: request.owner,
      farm: request.farm,
      plot: request.plot,
      operation: request.operation,
      activity: request.activity,
      insumo: request.insumo,
      areaHa: request.areaHa,
      serviceProvider: request?.serviceProvider
    }
  })
}

