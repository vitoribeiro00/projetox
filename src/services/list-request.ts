import AsyncStorage from "@react-native-async-storage/async-storage"
import { Request } from "../models/request-model"


export default async function listRequests(): Promise<Request[]> {
  const requests = await AsyncStorage.getItem('requests')
  if(!requests) return null
  return JSON.parse(requests).map((request: Request) => {
    return {
      name: request.name,
      code: request.code,
      owner: request.owner,
      farm: request.farm,
      plot: request.plot,
      operation: request.operation,
      activity: request.activity,
      insumo: request.insumo,
      areaHa: request.areaHa
    }
  })
}

