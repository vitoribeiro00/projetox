import { StopControl } from "../models/stop-control-model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function CreateStopControl(newStopControl: StopControl) {
  let stopControls: StopControl[] = [];

  const stopControlStorage = await AsyncStorage.getItem("stopsControls");

  if (stopControlStorage) {
    stopControls = [...stopControls, ...JSON.parse(stopControlStorage)];
  }

  stopControls.push(newStopControl);

  await AsyncStorage.setItem("stopsControls", JSON.stringify(stopControls));

}
