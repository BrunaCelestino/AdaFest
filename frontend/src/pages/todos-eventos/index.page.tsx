import { Flex, Grid, GridItem, Text, Image, Divider } from "@chakra-ui/react";
import { useEvents } from "../../api/events";
import { IEvents } from "../../api/interfaces/events";
import { DynamicIcon } from "../../components/DynamicIcon";
import { formatDate } from "../../utils/formatDate";
import { sortEventsByDate } from "../../utils/sortData";

export default function AllEvents() {

    const events = useEvents();

    


    return (
        <Flex direction="column" minH="calc(100vh - 204px)" p="24px">
            <Flex justifyContent="center" mb="32px" > <Text fontSize="32px">Todos os Eventos</Text>
            </Flex>
            <Grid templateColumns='repeat(4, 1fr)' gap={4}>
            {!events.isLoadingEvents && sortEventsByDate(events.events?.data as IEvents[]).map((data, i)=> (
            <GridItem key={i} justifyContent="center">
                <Flex cursor="pointer" borderRadius="16px" border="1px solid #E3E5E5" maxW="270px" direction="column" >
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
                </Flex></GridItem>))}
              
            </Grid>
        </Flex>)
}