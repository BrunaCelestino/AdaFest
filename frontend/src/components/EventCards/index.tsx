import { Flex, Stack, Text, Image, Divider, useRadio } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useEvents } from "../../api/events";
import { IEvents } from "../../api/interfaces/events";
import { formatDate } from "../../utils/formatDate";
import { sortEventsByDate } from "../../utils/sortData";
import { DynamicIcon } from "../DynamicIcon"

export const EventCards = () => {

    const events = useEvents();

    console.log(events.events?.data[0].empresa)
    const router = useRouter();

    return (
        <Flex px="24px" w="100%" direction="column" gap="24px">
            <Flex justifyContent="center" w="100%">
                <Text fontSize="32px">Próximos Eventos</Text>
            </Flex>
            <Flex justifyContent="space-between">
            {!events.isLoadingEvents && sortEventsByDate(events.events?.data as IEvents[]).slice(0,4).map((data, i)=> (
            <Flex key={i}
            onClick={()=> router.push(`/todos-eventos/${data.id}`)}><Flex cursor="pointer" borderRadius="16px" border="1px solid #E3E5E5" w="270px" direction="column" >
                    <Image objectFit="fill" borderRadius="16px 16px 0px 0px" h="150px" w="300px" src={`${data.banner}`} />
                    <Flex justifyContent="center" p="8px">
                        <Text color="black" fontWeight="solid">
                            {data.nome}
                        </Text>

                    </Flex>
                    <Flex px="16px" pb="8px" color="neutral.dark">
                        <Text fontSize="12px" textAlign="justify">
                            {data.descricao.slice(0, 100) + "[...]"}
                        </Text>
                    </Flex>
                    <Divider />
                    <Flex direction="column" p="16px" gap="4px" color="content.dark">
                        <Flex gap="8px" alignItems="center">
                            <DynamicIcon w="14px" h="14px" icon="calendar" />
                            <Text fontSize="12px">
                                {formatDate(data.data).day} às {formatDate(data.data).time}
                            </Text>

                        </Flex>
                        <Flex gap="8px" alignItems="center">
                            <DynamicIcon w="14px" h="14px" icon="ticket" />
                            <Text fontSize="12px">
                                {data.capacidade} pessoas
                            </Text>
                        </Flex>
                        <Flex gap="8px" alignItems="center">
                            <DynamicIcon w="14px" h="14px" icon="localization" />
                            <Text fontSize="12px">
                                {data.local}
                            </Text>
                        </Flex>

                    </Flex>
                </Flex></Flex>))}
                    </Flex>
                    <Flex justifyContent="end" gap="8px" color="#00355B" cursor="pointer" onClick={() => {router.push("/todos-eventos")}}>
                        <Text fontSize="12px">ver mais</Text>
                        <DynamicIcon w="7px" h="10px" icon="arrow-right" />
                    </Flex>
        </Flex>)
}