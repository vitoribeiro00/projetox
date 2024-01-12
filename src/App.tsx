import { NativeBaseProvider, StatusBar } from 'native-base';
import MainRouter from './routes/main-router';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <MainRouter />
    </NativeBaseProvider>
  );
}
