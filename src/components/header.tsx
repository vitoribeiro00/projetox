import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Heading, VStack } from 'native-base';
import React from 'react';


type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  const navigation = useNavigation()
  return (
    <VStack w="full" backgroundColor="black" py={5} px={2} flexDirection="row" alignItems="center">
      <AntDesign name="left" size={24} color="white" onPress={() => navigation.goBack()} style={{ marginRight: 10 }} />
      <Heading color="white">{title}</Heading>
    </VStack>
  );
}

export default Header;