import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DynamicIcon } from "../DynamicIcon";

export default function Footer() {
    const router = useRouter();
    return (
        <Flex w="100vw" bgColor="black"  p="16px" color="white" mb="24px" gap="16px"
        alignItems="center" justifyContent="end" cursor="pointer" onClick={()=> router.push("/")}>
             <Text pl="8px" fontSize="16px" >
             Saiba mais sobre AdaFest
                </Text>
                <DynamicIcon w="20px" h="20px"icon="plus-circle"/>
           
        </Flex>
    )
 

}