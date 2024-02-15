// import {
//   Center,
//   Heading,
//   Input,
//   VStack,
//   Text,
//   HStack,
//   ScrollView,
//   Button,
// } from "native-base";
// import Container from "../components/container";
// import React from "react";
// import Header from "../components/header";
// import { Controller, useForm } from "react-hook-form";
// import CreateStopControl from "../services/create-stop-control";

// export default function StopControl({ navigation }) {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: {
//       reason: "",
//       startTime: "",
//       endTime: "",
//     },
//   });

//   const onSubmit = (data) => {
//     CreateStopControl(data);
//     reset();
//   };

//   return (
//     <Container>
//       <Header title="Controle de Paradas" />
//       <ScrollView>
//         <VStack space={3} mx={2} mt={2}>
//           <HStack>
//             <Text fontSize={16} marginLeft="14%">
//               Código 1
//             </Text>
//             <Text fontSize={16} marginLeft="23%">
//               Nº da requisição: 2
//             </Text>
//           </HStack>

//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <Text fontSize={16} marginLeft={1}>
//                   Motivo
//                 </Text>
//                 <Input
//                   size="lg"
//                   variant="rounded"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                 />
//               </>
//             )}
//             name="reason"
//           />

//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <Text fontSize={16} marginLeft={1}>
//                   Horário Inicio
//                 </Text>
//                 <Input
//                   size="lg"
//                   variant="rounded"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                 />
//               </>
//             )}
//             name="startTime"
//           />

//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <>
//                 <Text fontSize={16} marginLeft={1}>
//                   Horário Final
//                 </Text>
//                 <Input
//                   size="lg"
//                   variant="rounded"
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                 />
//               </>
//             )}
//             name="endTime"
//           />

//           <Button
//             onPress={handleSubmit(onSubmit)}
//             variant="outline"
//             rounded={15}
//             borderColor="#1414b8"
//             colorScheme="#000000"
//             marginTop={5}
//             marginBottom={5}
//           >
//             Salvar
//           </Button>
//         </VStack>
//       </ScrollView>
//     </Container>
//   );
// }
