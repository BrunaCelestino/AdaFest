import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text, Flex, Input, InputGroup, InputRightElement, Stack, RadioGroup, Radio } from "@chakra-ui/react"
import { useState } from "react";
import { DynamicIcon } from "../DynamicIcon"
import { RegisterModal } from "../RegisterModal";

export const LoginModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [loginType, setLoginType] = useState('');

    const handleChange = (event: any) => setValue(event.target.value);
    const validateLogin =
        (emailError && passwordError) || emailError || passwordError;

        const handleSignIn = async () => {
            if (email.length === 0) {
              setEmailError(true);
              setPasswordError(true);
            } else if (email.length > 3) {
              setEmailError(false);
              setPasswordError(false);
            }
            
          };
        
    return (
        <>
            <Flex onClick={onOpen} gap="4px" cursor="pointer">
                <DynamicIcon w="20px" h="20px" icon="person" />
                <Text>Login</Text>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} size="xs">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Stack >
                        
                            <RadioGroup onChange={setLoginType} value={loginType}>
                                <Stack direction='row'>
                                    <Radio value='1' colorScheme="facebook">Usuário</Radio>
                                    <Radio value='2'
                                    colorScheme="facebook">Empresa</Radio>

                                </Stack>
                            </RadioGroup>
                            <Input
                                placeholder="e-mail"
                                border="1px solid"
                                focusBorderColor="#00355B"
                                bgColor={'white'}
                                borderColor={validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                onInput={handleChange}
                                _hover={{ bgColor: 'white' }} 
                                onChange={(e) => setEmail(e.target.value)}/>

                            {validateLogin && (
                                <Text color="error.base" fontSize="12px">
                                    Email inválido.
                                </Text>
                            )}
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
                                    borderColor={

                                        validateLogin ? 'error.base' : value.length > 2 ? 'neutral.dark' : 'neutral.base'}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </InputGroup>
                            {validateLogin && (
                                <Text color="error.base" fontSize="12px">
                                    Senha inválida.
                                </Text>
                            )}
                        </Stack>
                    </ModalBody>

                    <ModalFooter flexDirection="column">
                        <Button
                            w="100%"
                            mt="32px"
                            type="submit"
                            bgColor="#00355B"
                            color="white"
                            fontSize="14px"
                            disabled={email.length < 3 || password.length < 3}
                            _disabled={{
                                bgColor: 'neutral.lighter',
                                color: 'neutral.dark',
                                pointerEvents: 'none',
                                cursor: 'not-allowed',
                            }}
                            borderRadius={8}
                            onClick={handleSignIn}
                            _hover={{ bgColor: '#003B' }}
                        >
                            <Text >Entrar</Text>
                        </Button>
                      
                       <RegisterModal/>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}