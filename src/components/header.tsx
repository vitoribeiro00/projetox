import { Heading, VStack } from 'native-base';
import React from 'react';


type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
    <VStack w="full" backgroundColor="black" p={2} justifyContent="center" alignItems="center" mb={5}>
      <Heading color="white">{title}</Heading>
    </VStack>
  );
}

export default Header;