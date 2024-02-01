
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function CreateRequest(newRequest: Request) {
  let requests: Request[] = [newRequest];
  
  // let requests: {name: string}[] = [newRequest]
  
  const requestsStorage = await AsyncStorage.getItem('requests');

  if(requestsStorage){
    requests = [
      ...requests,
      ...JSON.parse(requestsStorage),
    ]
  }

  await AsyncStorage.setItem('requests', JSON.stringify(requests));

  const requestsStorage2 = await AsyncStorage.getItem('requests');
  
  console.log(requestsStorage2)
}
