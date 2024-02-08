
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ServiceProvider } from "../models/service-provider-model";

export default async function CreateServiceProvider(newServiceProvider: ServiceProvider) {
  let servicesProvider: ServiceProvider[] = [];
  
  const servicesProviderStorage = await AsyncStorage.getItem('servicesProvider');

  if(servicesProviderStorage){
    servicesProvider = [
      ...servicesProvider,
      ...JSON.parse(servicesProviderStorage),
    ]
  }

  servicesProvider.push(newServiceProvider)

  await AsyncStorage.setItem('servicesProvider', JSON.stringify(servicesProvider));

  const print = await AsyncStorage.getItem('servicesProvider')

  console.log(print);
}