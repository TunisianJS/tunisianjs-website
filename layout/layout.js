import Head from 'next/head'

import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Body = ({ children }) => (<>{children}</>)

export function Layout({ children }) {
  return (
    <>
      <Head>
        <Meta />
        <title>Tunisia JS Community</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>
        <Navbar />
        {children}
        <Footer />
      </Body>
    </>
  )
}
