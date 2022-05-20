import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LinkWidget } from '../components/LinkWidget'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <LinkWidget />
    </>
  )
}

export default MyApp
