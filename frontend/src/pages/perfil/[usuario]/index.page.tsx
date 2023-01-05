import { Flex, Stack, Image, Text, Divider } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { IUser } from "../../../api/interfaces/users";
import { useTickets } from "../../../api/tickets";
import { getUserByID } from "../../../api/users";
import UFs from "../../../utils/UFs.json"
export default function Profile() {
    const [user, setUser] = useState<IUser>()

    const ticketList = useTickets()
    console.log(ticketList)
    const getUser = async () => {
        const id = localStorage.getItem("id")
        if (id !== null) {
            const findUser = await getUserByID(id)
            if (findUser.status === 200) {
                setUser(findUser.data)
            }
        }

    }

    useEffect(() => {
        getUser()
    }, [])

    const findUF = (state: string) => {
        return UFs.UF.find(uf => uf.nome === state)?.sigla

    }

    return (
        <Flex direction="column" minH="calc(100vh - 204px)" p="48px" >
            {user &&
                <Stack >
                    <Flex >
                        <Flex justifyContent="start" w="50%">
                            <Text fontSize="32px" color="#00355B" fontWeight="extrabold">Meu Perfil
                            </Text>
                        </Flex>
                        <Flex justifyContent="center">
                            <Text fontSize="32px" color="#00355B" fontWeight="extrabold"> Próximo Evento</Text>

                        </Flex>
                    </Flex>
                    <Divider />

                    <Flex>

                        <Stack fontSize="16px" color="content.base" w="50%">
                            <Image w="120px" h="120px" borderRadius="360px" src={user.foto} />
                            <Text fontWeight="extrabold" fontSize="20px">
                                {user.nome}
                            </Text>
                            <Text>
                                {moment().diff(user.dataNascimento, 'years')} anos
                            </Text>
                            <Text>
                                De {user.endereco.cidade} - {findUF(user.endereco.estado)}
                            </Text>


                        </Stack>
                        <Stack justifyContent="space-between">
                            <Flex justifyContent="center" direction="column" h="100%">
                                <Text fontSize="16px" color="content.dark" >Você ainda não tem eventos planejados :(</Text>
                            </Flex>
                            <Flex >

                                <Text fontSize="32px" color="#00355B" fontWeight="extrabold">Eventos Anteriores</Text>
                            </Flex>
                            <Flex justifyContent="center" direction="column" h="100%">
                                <Text fontSize="16px" color="content.dark" >Você ainda não foi em nenhum evento :(</Text>
                            </Flex>
                        </Stack>
                    </Flex>



                </Stack>


            }
        </Flex>
    )
}