import type { AppProps } from 'next/app'
import { defaultTheme } from '@/core/constants/theme'
import { ThemeProvider } from 'styled-components'
import '../styles/global.css'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { DefaultLayout } from '@/layouts/default'
import { GlobalStyle } from '@/styles/global'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default function App({ Component, pageProps }: AppProps) {
  const defaultLayout = (page: ReactNode) => (
    <DefaultLayout>{page}</DefaultLayout>
  )

  const getLayout = (Component as any).getLayout || defaultLayout

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
