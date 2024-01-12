import { useNavigation } from "@react-navigation/native";
import { Button, Heading, VStack, View } from "native-base";
import Container from "../components/container";


export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <Container>
      <VStack flex={1} justifyContent="center" alignItems="center" space={5}>
        <Heading>PROJETO - X</Heading>
        <VStack  space={2}>
          <Button onPress={() => navigation.navigate("grower")} variant="outline" rounded={10} >Produtor</Button>
          <Button onPress={() => navigation.navigate("serviceProvider")} variant="outline" rounded={10} >Prestador de Serviço</Button>
        </VStack>
      </VStack>
    </Container>
    
  )
}