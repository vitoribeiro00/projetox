import { NativeBaseProvider, StatusBar} from 'native-base';
import MainRouter from './routes/main-router';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
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
