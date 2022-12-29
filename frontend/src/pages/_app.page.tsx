import '../styles/index.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import {theme} from "../styles/theme"


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
      <ChakraProvider theme={theme}>
        {/*renders the dashboard if in the /dashboard route*/}
        <Flex>
          <Component {...pageProps} />
          
        </Flex>
      </ChakraProvider>
  );
}

