import React from 'react';

import { NativeBaseProvider, StatusBar} from 'native-base';
import MainRouter from './routes/main-router';
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
  
  return (
    <NativeBaseProvider>
      <ToastProvider>
        <StatusBar  />
        <MainRouter />
      </ToastProvider>
    </NativeBaseProvider>
  );
}
