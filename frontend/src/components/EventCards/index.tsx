import { Flex, Stack, Text, Image, Divider } from "@chakra-ui/react"
import { DynamicIcon } from "../DynamicIcon"

export const EventCards = () => {
    const description = "O Holi é um festival Hindu comum na Índia que celebra a chegada da Primavera e o triunfo do bem sobre o mal. Holi também celebra a união de Krishna e Radha, pois segundo a lenda, Krishna tinha o costume de brincar cobrindo-a com várias cores. Nos últimos tempos o festival vem se espalhando pelo mundo tendo épocas de chegada como forma de celebração do amor, alegria e cor. O Local escolhido para esse início de comemoração , cercado de área verde - Espaço Lar Monteiro Lobato Hoje no Brasil essa comemoração se tornou comum e cada vez mais cresce tendo sua época do 'Holi Hai' , aonde as pessoas se cumprimentam e acontece um verdadeiro festival."
    return (
        <Flex px="24px" w="100%" direction="column" gap="24px">
            <Flex justifyContent="center" w="100%">
                <Text fontSize="32px">Próximos Eventos</Text>
            </Flex>
            <Flex cursor="pointer" borderRadius="16px" border="1px solid #E3E5E5" w="270px" direction="column">
                <Image objectFit="fill" borderRadius="16px 16px 0px 0px" h="150px" w="300px" src={`../banners/${"music-fest"}.png`} />
                <Flex justifyContent="center" p="8px">
                    <Text color="black" fontWeight="solid">
                        Holi - Festival das Cores
                    </Text>

                </Flex>
                <Flex px="16px" pb="8px" color="neutral.dark">
                    <Text fontSize="12px" textAlign="justify">
                        {description.slice(0, 150) + "[...]"}
                    </Text>
                </Flex>
                <Divider/>
                <Flex direction="column" p="16px" gap="4px" color="content.dark">
                    <Flex gap="8px" alignItems="center">
                        <DynamicIcon w="14px" h="14px" icon="calendar"/>
                        <Text fontSize="12px">
                            13 jan 2023 às 17h00
                        </Text>
                        
                    </Flex>
                    <Flex gap="8px" alignItems="center">
                        <DynamicIcon w="14px" h="14px" icon="ticket"/>
                        <Text fontSize="12px">
                           2000 pessoas 
                        </Text>
                    </Flex>
                    <Flex gap="8px" alignItems="center">
                        <DynamicIcon w="14px" h="14px" icon="localization"/>
                        <Text fontSize="12px">
                           Rio Claro, SP
                        </Text>
                    </Flex>

                </Flex>
            </Flex>
            <Flex justifyContent="end" gap="8px" color="#00355B">
                <Text fontSize="12px">ver mais</Text>
                <DynamicIcon w="7px" h="10px" icon="arrow-right"/>
            </Flex>

        </Flex>)
}