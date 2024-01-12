import { useNavigation } from "@react-navigation/native";
import { Button, Heading, VStack, View } from "native-base";


export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" space={5}>
      <Heading>PROJETO - X</Heading>
      <VStack  space={2}>
        <Button onPress={() => navigation.navigate("grower")} variant="outline" rounded={10} colorScheme="black">Produtor</Button>
        <Button onPress={() => navigation.navigate("serviceProvider")} variant="outline" rounded={10} color="black">Prestador de Serviço</Button>
      </VStack>
    </VStack>
  )
}