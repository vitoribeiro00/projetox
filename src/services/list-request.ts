import AsyncStorage from "@react-native-async-storage/async-storage"


export default async function listRequests(requests) {
  
 let listRequest = await AsyncStorage.getItem(requests)

console.log(listRequest)

 return listRequest;

}

