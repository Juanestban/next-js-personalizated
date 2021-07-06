import Head from 'next/head'
import { NodeEnvState } from '@config/nodeEnv'
import { URL_API } from '@config/urlsApi'

export default function Index() {
  return (
    <>
      <Head>
        <title>Reindustrias - Inicio</title>
      </Head>
      <h1>hello world</h1>
      <p>{NodeEnvState}</p>
      <p>{URL_API}</p>
    </>
  )
}

export async function getStaticProps() {
  console.log('[+] NODE_ENV:', process.env.NODE_)
  console.log('[+] urlApi:', process.env.URL_API)
  console.log('[+] local urlApi:', process.env.local)

  return { props: {} }
}
