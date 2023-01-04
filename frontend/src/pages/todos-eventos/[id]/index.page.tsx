import { Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEventId } from "../../../api/events";
import { IEvents } from "../../../api/interfaces/events";

export default function EventDetail() {
    
    const router = useRouter();
    const eventId = router.asPath.split("/")[2]
    const eventFound: IEvents = useEventId(eventId).event?.data
    return (
        <Flex direction="column" minH="calc(100vh - 204px)" p="24px">
            {eventFound && 
            <Flex gap="48px">
                <Flex w="30%">
                    <Image borderRadius="16px" src={eventFound.banner}/>

                </Flex>
                <Flex direction="column"  w="60%">
                    <Text fontSize="24px" color="#00355B" fontWeight="extrabold">
                        {eventFound.nome}
                    </Text>
                    <Text align="justify">
                        {eventFound.descricao}
                    </Text>
                </Flex>
                
                
                
                
                
                
                
                </Flex>}
    </Flex>
    )
}