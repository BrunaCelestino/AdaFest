import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text, Input, InputGroup, InputRightElement, useToast, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { getAddress } from "../../api/cep";
import { DynamicIcon } from "../DynamicIcon"
import UFs from "../../utils/UFs.json"
import { postCreateUser } from "../../api/users";
import moment from "moment";
import { postCreateCompany } from "../../api/companies";

export const RegisterModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [loginType, setLoginType] = useState('1');
    const toast = useToast()
    //address
    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [hood, setHood] = useState('')
    const [city, setCity] = useState('')
    const [number, setNumber] = useState('')
    const [state, setState] = useState('')

    //personal info
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [cnpj, setCnpj] = useState('')

    //account info 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [link, setLink] = useState('');

    async function handleSearch(cep: string) {
        cep = cep.replace("-", "")
        cep = cep.replace(".", "")
        setCep(cep)
        const findAddress = await getAddress(cep)
        if (findAddress.data && findAddress.status === 200) {
            setStreet(findAddress.data?.logradouro)
            setHood(findAddress.data?.bairro)
            setCity(findAddress.data?.localidade)
            const endereco = UFs.UF.find(estado => estado.sigla === findAddress.data.uf)

            if (endereco) {
                setState(endereco?.nome)
            }

        }
    }

    const handleSignUp = async () => {
        

       

       

        if(loginType === "1") {
            const newRegister = {
                nome: name,
                dataNascimento: birthdate,
                endereco: {
                    cep: cep,
                    logradouro: street,
                    numero: number,
                    cidade: city,
                    estado: state,
                    bairro: hood
                },
                email: email,
                senha: password,
                telefone: phone
            }
        const createUser = await postCreateUser(newRegister)
        if(createUser.status === 200) {
            toast({
                title: `Cadastro realizado com sucesso!`,
                status: "success",
                isClosable: true,
              })
            onClose()
        } else {
            toast({
                title: `Falha ao realizar cadastro!`,
                status: "error",
                isClosable: true,
              })
        }
    }

    if(loginType === "2") {
        const newRegister = {
            nome: name,
            cnpj: cnpj,
            endereco: {
                cep: cep,
                logradouro: street,
                numero: number,
                cidade: city,
                estado: state,
                bairro: hood
            },
            email: email,
            senha: password,
            telefone: phone,
            logo: link,
            tag: name.slice(0, 10).toLocaleLowerCase().replaceAll(" ", "") + moment().format('YYYY')
        }

       
        const createCompany = await postCreateCompany(newRegister)
        console.log(createCompany)
        if(createCompany.status === 200) {
            toast({
                title: `Cadastro realizado com sucesso!`,
                status: "success",
                isClosable: true,
              })
            onClose()
        } else {
            toast({
                title: `Falha ao realizar cadastro!`,
                status: "error",
                isClosable: true,
              })
        }
    }
}



    return (
        <>
            <Flex gap="8px" fontSize="12px" mt="16px">
                <Text>Não tem cadastro? </Text>
                <Text color="#00355B" onClick={onOpen} _hover={{ cursor: "pointer" }}>Registre-se!</Text>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastro</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction="column" mb="16px">
                        <Text>Tipo de Cadastro:</Text>

                        <RadioGroup onChange={setLoginType} value={loginType}>
                                <Stack direction='row'>
                                    <Radio value='1' colorScheme="facebook">Usuário</Radio>
                                    <Radio value='2'
                                    colorScheme="facebook">Empresa</Radio>

                                </Stack>
                            </RadioGroup>
                            </Flex>
                        <Text>Informações Pessoais:</Text>
                        <Input
                            type="text"
                            placeholder="Nome"
                            border="1px solid"
                            focusBorderColor="#00355B"
                            bgColor={'white'}
                            // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                            value={name}
                            _hover={{ bgColor: 'white' }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Flex gap="16px" my="16px">
                        {loginType === "1"? 
                            <Input
                                placeholder="Data de Nascimento"
                                type="date"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={birthdate}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setBirthdate(e.target.value)}
                            /> :
                            <Input
                                placeholder="CNPJ"
                                type="text"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={cnpj}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setCnpj(e.target.value)}
                            />}
                            <Input
                                placeholder="Telefone"
                                type="text"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={phone}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Flex>
                        <Text>Informações de Conta:</Text>

                        <Flex gap="16px" mb="16px">
                            <Input
                                placeholder="E-mail"
                                type="email"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={email}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputGroup>
                                <InputRightElement onClick={handleClick} cursor="pointer">
                                    {show ? (
                                        <Flex color="#3B3B40">
                                            <DynamicIcon w="16px" h="16px" icon="eye-hidden" />
                                        </Flex>
                                    ) : (
                                        <DynamicIcon w="16px" h="16px" icon="eye-show" />
                                    )}
                                </InputRightElement>
                                <Input
                                    placeholder="senha"
                                    type={show ? 'text' : 'password'}
                                    border="1px solid"
                                    focusBorderColor="#00355B"
                                    bgColor={'white'}
                                    // borderColor={

                                    //     validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </InputGroup>
                        </Flex>
                        {loginType === "2" && <Input
                        mb="16px"
                                placeholder="Link Logo"
                                type="text"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={link}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setLink(e.target.value)}
                            />}
                        <Text>Endereço</Text>
                        <Flex gap="16px" mb="16px">
                            <Flex gap="8px"  >
                                <Input

                                    type="text"
                                    placeholder="CEP"
                                    border="1px solid"
                                    focusBorderColor="#00355B"
                                    bgColor={'white'}
                                    // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                    value={cep}
                                    _hover={{ bgColor: 'white' }}
                                    onChange={(e) => setCep(e.target.value)}
                                />
                                <Flex color="#3B3B40" w="46px" h="38px" bgColor="#F2F2F2"
                                    borderRadius="360px" justifyContent="center" cursor="pointer" onClick={() => handleSearch(cep)}>
                                    <DynamicIcon w="16px" h="16px" icon="search" />
                                </Flex>
                            </Flex>
                            <Input
                                type="text"
                                placeholder="Rua"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={street}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                            <Input
                                w="25%"
                                type="text"
                                placeholder="Número"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={number}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </Flex>

                        <Flex gap="16px" mb="16px">
                            <Input
                                type="text"
                                placeholder="Bairro"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={hood}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setHood(e.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="Cidade"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={city}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setCity(e.target.value)}
                            />

                            <Input
                                w="40%"
                                type="text"
                                placeholder="Estado"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                // borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                value={state}
                                _hover={{ bgColor: 'white' }}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            w="100%"

                            type="submit"
                            bgColor="#00355B"
                            color="white"
                            fontSize="14px"

                            _disabled={{
                                bgColor: 'neutral.lighter',
                                color: 'neutral.dark',
                                pointerEvents: 'none',
                                cursor: 'not-allowed',
                            }}
                            borderRadius={8}
                            onClick={handleSignUp}
                            _hover={{ bgColor: '#003B' }}
                        >
                            <Text >Cadastrar</Text>
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}