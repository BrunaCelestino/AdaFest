import { Flex, Image, Text } from "@chakra-ui/react"
import { useCompanies } from "../../api/companies"
import { IEmpresa } from "../../api/interfaces/events"
import { DynamicIcon } from "../DynamicIcon"

export const CompanyCards =() => {
    const companies = ["b3", "bradesco", "ada"]

    const data = useCompanies()

    let logos: any[] = []
    if(!data.isLoadingCompanies) {
        logos = (data.companies?.data as IEmpresa[]).map((data) =>  data.logo)
   
    }


    return (
    <Flex p="24px" justifyContent={"space-between"} gap="24px" direction="column" mb="48px">
        <Flex justifyContent="center" > <Text fontSize="32px">Empresas Parceiras</Text></Flex>
       
       <Flex justifyContent={"space-between"} gap="16px" >
        {logos.slice(0,4).map((data, index) => (
            <Flex key={index}>
           {data !== null && 
            <Flex   border="1px solid" borderRadius="16px"  h="150px" cursor="pointer" >
                 <Image objectFit="fill"  w="300px"  borderRadius="16px" src={`${data}`} />
            
            </Flex>}
            </Flex>
        ))}
        <Flex border="1px solid" w="300px" h="150px" borderRadius="16px" justifyContent="center" direction="column" cursor="pointer">
            <Flex alignItems="center" justifyContent="center"  px="48px">
                <Text textAlign="center" fontSize="20px">
                Quer ser uma de nossas empresas parceiras?
                </Text>
            
            </Flex>
            <Flex justifyContent="end" pr="8px"> <DynamicIcon icon="arrow-right-square"/></Flex>
           
            </Flex>
            </Flex>
    </Flex>)
}