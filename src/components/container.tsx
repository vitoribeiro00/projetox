import React from "react";
import { VStack, Text } from "native-base";

type ContainerProps = {
  children: React.ReactNode
}


export default function Container({ children }: ContainerProps){
  return (
    <VStack flex={1} mt={2} mx={5}>
      {children}
    </VStack>
  )
}