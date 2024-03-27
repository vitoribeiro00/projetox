import listRequests from "./list-request";

export default async function myRequestToSync(){
  const requests = await listRequests();

  return requests
}