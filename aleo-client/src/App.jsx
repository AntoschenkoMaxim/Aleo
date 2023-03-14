import { useScrollIntoView } from '@mantine/hooks'
import {
  Footer,
  Works,
  List,
  Hero,
  HeaderMenu as Header,
} from './components/index'

function App() {
  const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 60 })
  return (
    <>
      {/* <Scroll /> */}
      <Header />
      <Hero scroll={scrollIntoView} />
      <Works />
      <List reference={targetRef} />
      <Footer />
    </>
  )
}

export default App
