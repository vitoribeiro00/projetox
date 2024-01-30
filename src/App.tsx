import { NativeBaseProvider, StatusBar} from 'native-base';
import MainRouter from './routes/main-router';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  
  useEffect(() => {
    (async ()=> {
      await AsyncStorage.clear()
    })()
  }, [])

  return (
    <NativeBaseProvider>
      <StatusBar  />
      <MainRouter />
    </NativeBaseProvider>
  );
}
