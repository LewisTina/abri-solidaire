import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from "next-themes"
import { ConfirmationProvider } from '@/src/context/Dialog';
import { OperationStatusProvider } from '@/src/context/OperationStatus';

function App({ Component, pageProps }: AppProps) {
  const queryClient = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 10 * 1000
      },
      mutations: {
        retry: false
      }
    }
  }))[0];
  
  return <QueryClientProvider client={queryClient}>
          <main className={`flex justify-center`}>
            <ThemeProvider attribute="class">
                <OperationStatusProvider>
                  <ConfirmationProvider>
                      <Component {...pageProps} />
                  </ConfirmationProvider>
                </OperationStatusProvider>
            </ThemeProvider>
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
}

export default App;