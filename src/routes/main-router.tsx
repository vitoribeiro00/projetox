import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GrowerScreen from '../screens/grower';
import ServiceProviderScreen from '../screens/service-provider';


const Stack = createNativeStackNavigator();

export default function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="app" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="grower" component={GrowerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="serviceProvider" component={ServiceProviderScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}