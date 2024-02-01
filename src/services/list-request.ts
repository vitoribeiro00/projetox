import AsyncStorage from "@react-native-async-storage/async-storage"


export default async function listRequests(): Promise<Request[]> {
  const requests: Request[] = [];

  const listRequest = await AsyncStorage.getItem('requests')

  JSON.parse(listRequest).map((request: Request) => {
    requests.push(request)
  })

 return requests;

}

