import { useScrollIntoView } from '@mantine/hooks'
import { Scroll } from './components/Scroll'
import { Footer } from './components/Footer'
import { HeaderMenu as Header } from './components/Header'
import { Hero } from './components/Hero'
import { List } from './components/List'
import { Works } from './components/Works'

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
