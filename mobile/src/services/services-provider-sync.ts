// sincronizar os servicoes com as paradas feitas somente do que tem talhao finalizado

import axios from "axios";
import env from "../env";

export default async function servicesProviderSync(requests: any) {
  const response = await axios.post(`${env.API_URL}/sync-requests`, {requests})
  
  console.log(requests)
}