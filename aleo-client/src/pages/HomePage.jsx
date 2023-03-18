import { useScrollIntoView } from '@mantine/hooks'
import { Hero, List, Works } from '../components'

export function HomePage() {
  const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 60 })
  return (
    <>
      <Hero scroll={scrollIntoView} />
      <Works />
      <List reference={targetRef} />
    </>
  )
}
