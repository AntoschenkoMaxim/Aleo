import { Card, createStyles, Group, SimpleGrid, Text } from '@mantine/core'
import { useGetUsersByQuestQuery } from '../redux/questApi'
import { LeaderboardCard } from './index'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },
}))

export function Leaderboard({ questNumber }) {
  //styles
  const { classes } = useStyles()

  //RTK Query
  const limit = 9
  const { data = [], isLoading } = useGetUsersByQuestQuery({
    questNumber,
    limit,
  })

  //mocks
  const items = data.map((item, index) => (
    <LeaderboardCard key={item.id} item={item} index={index} />
  ))

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Winners</Text>
        <Text size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          Quest {questNumber}
        </Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  )
}
