import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

/*
  여러개의 Layout을 사용할 때 아래와 같이 Setting.
  https://nextjs.org/docs/basic-features/layouts
*/

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  // console.log(' ::: app ::: ')

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)

}

export default MyApp
