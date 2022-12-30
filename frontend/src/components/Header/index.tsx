import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DynamicIcon } from "../DynamicIcon";

export default function Header() {
    const router = useRouter();
    return (
        <Flex w="100%" bgColor="black"   color="white" mb="24px" px="24px"  py="24px" >
            <Flex alignItems="center"  h="100%" w="100%" >
             <Text pl="8px"  fontSize="40px" cursor="pointer" onClick={()=> router.push("/")}>
                    ADAFEST
                </Text>
                </Flex>
            <Flex  justifyContent="end" alignItems="center" w="100%" gap="12px" pr="8px" >
                <Flex gap="4px" cursor="pointer">
                    <DynamicIcon w="20px" h="20px"icon="person"/>
                    <Text>Login</Text>
                </Flex>
                <Flex gap="4px" cursor="pointer">
                    <DynamicIcon w="20px" h="20px"icon="cart"/>
                    <Text>Carrinho</Text>
                </Flex>
            </Flex>
          
        </Flex>
    )
 

}