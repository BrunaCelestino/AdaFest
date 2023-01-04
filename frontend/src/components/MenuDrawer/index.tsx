import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure, Text, Stack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { DynamicIcon } from "../DynamicIcon"

export function MenuDrawer(props: {user: string}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const[type, setType] = useState("")

    const handleLeave = () => {
        localStorage.removeItem("nome")
        localStorage.removeItem("id")
        localStorage.removeItem("tipo")
        if(localStorage.getItem("nome") === null) {
            router.push("/")
            onClose()
        }
       
    }

    const checkIfPage = (title: string) => {
        const path = router.pathname
            return path.includes(title)

    }

    const checkType = () => {
      const tipo = localStorage.getItem("tipo")
      if(tipo !==null) {
        setType(tipo)
    }
    }

    useEffect(() => {
      checkType()
    })
 
    return (
      <>
      <Flex onClick={onOpen} cursor="pointer">Olá, {props.user}</Flex>
        <Drawer onClose={onClose} isOpen={isOpen} size={"xs"}
        placement={"left"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Olá, {props.user}</DrawerHeader>
            <DrawerBody flexDirection="column" justifyContent="space-between">
                <Stack p="24px">
            <Flex cursor="pointer"
             alignItems="center" justifyContent="space-between" gap="8px"
             color={checkIfPage("perfil")? "#00355B": "black"}
             onClick={() => router.push(`/perfil/${type === "empresa"? type + "/": ""}${props.user.replaceAll(" ", "")}`)}><Text fontWeight="extrabold">Perfil </Text> <DynamicIcon w="16px" h="16px" icon="person"/>
             </Flex>
             <Flex cursor="pointer"
             alignItems="center" justifyContent="space-between" gap="8px"
             color={checkIfPage("meus-eventos")? "#00355B": "black"}
             onClick={() => router.push(`/meus-eventos/${props.user.replaceAll(" ", "")}`)}><Text fontWeight="extrabold">Meus Eventos </Text> <DynamicIcon w="16px" h="16px" icon="ticket"/>
             </Flex>
             <Flex cursor="pointer"
             alignItems="center" justifyContent="space-between" gap="8px"
             color={checkIfPage("configuracoes")? "#00355B": "black"}
             onClick={() => router.push(`/configuracoes/${props.user.replaceAll(" ", "")}`)}><Text fontWeight="extrabold">Configurações </Text> <DynamicIcon w="16px" h="16px" icon="setting"/>
             </Flex>
             </Stack>
             <Flex cursor="pointer"
             alignItems="center" justifyContent="end" gap="8px"
             onClick={handleLeave}><Text>Sair </Text> <DynamicIcon w="16px" h="16px" icon="leave"/></Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }