import '../styles/index.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import {theme} from "../styles/theme"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        {/*renders the dashboard if in the /dashboard route*/}
        <Flex>
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
      </QueryClientProvider>

  );
}

