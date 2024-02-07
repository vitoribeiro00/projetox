
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function CreateRequest(newRequest: Request) {
  let requests: Request[] = [];
  
  const requestsStorage = await AsyncStorage.getItem('requests');

  if(requestsStorage){
    requests = [
      ...requests,
      ...JSON.parse(requestsStorage),
    ]
  }

  requests.push(newRequest)

  await AsyncStorage.setItem('requests', JSON.stringify(requests));

}
