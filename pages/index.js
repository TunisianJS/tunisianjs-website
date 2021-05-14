import Head from 'next/head'

import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Team from '../components/Team'
import Events from '../components/Events'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'

const Body = ({ children }) => (<>{children}</>)

export default function Home() {
  return (
    <>
      <Head>
        <Meta />
        <title>Tunisia JS Community</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>
        <Navbar />
        <Welcome />
        <About />
        <Events />
        <Team />
        <Sponsors />
        <Footer />
      </Body>
    </>
  )
}
