import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LinkWidget } from '../components/LinkWidget'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <LinkWidget />
    </ApolloProvider>
  )
}

export default MyApp
