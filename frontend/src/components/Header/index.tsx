import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DynamicIcon } from "../DynamicIcon";
import { LoginModal } from "../LoginModal";
import { MenuDrawer } from "../MenuDrawer";

export default function Header() {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState("")
    const router = useRouter();

    const getUser = () => {
        const username = localStorage.getItem("nome")

        if(username !== null) {
            setIsLogged(true)
            setUser(username)
        } else{
            setIsLogged(false) 
            setUser("") 
        }
    }

    useEffect(() => {
        getUser()
    })
   
    return (
        <Flex w="100%" bgColor="black"   color="white" mb="24px" px="24px"  py="24px" >
            <Flex alignItems="center"  h="100%" w="100%" >
             <Text pl="8px"  fontSize="40px" cursor="pointer" onClick={()=> router.push("/")}>
                    ADAFEST
                </Text>
                </Flex>
            <Flex  justifyContent="end" alignItems="center" w="100%" gap="12px" pr="8px" >
                {!isLogged ? <LoginModal/> : <MenuDrawer user={user}/>}
                
                <Flex gap="4px" cursor="pointer">
                    <DynamicIcon w="20px" h="20px"icon="cart"/>
                    <Text>Carrinho</Text>
                </Flex>
            </Flex>
          
        </Flex>
    )
 

}