import { NativeBaseProvider, StatusBar} from 'native-base';
import MainRouter from './routes/main-router';
import React from 'react';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar  />
      <MainRouter />
    </NativeBaseProvider>
  );
}
