import { Layout } from '../layout'

import Welcome from '../components/Welcome'
import About from '../components/About'
import Team from '../components/Team'
import Events from '../components/Events'
import Sponsors from '../components/Sponsors'

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <About />
      <Events />
      <Team />
      <Sponsors />
    </Layout>
  )
}
