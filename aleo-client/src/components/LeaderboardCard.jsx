import { createStyles, Text, UnstyledButton, rem } from '@mantine/core'
import {
  IconCircleNumber1,
  IconCircleNumber2,
  IconCircleNumber3,
  IconCircleNumber4,
  IconCircleNumber5,
  IconCircleNumber6,
  IconCircleNumber7,
  IconCircleNumber8,
  IconCircleNumber9,
} from '@tabler/icons-react'

const icons = [
  <IconCircleNumber1 color="#339AF0" size="2rem" />,
  <IconCircleNumber2 color="#339AF0" size="2rem" />,
  <IconCircleNumber3 color="#339AF0" size="2rem" />,
  <IconCircleNumber4 color="#339AF0" size="2rem" />,
  <IconCircleNumber5 color="#339AF0" size="2rem" />,
  <IconCircleNumber6 color="#339AF0" size="2rem" />,
  <IconCircleNumber7 color="#339AF0" size="2rem" />,
  <IconCircleNumber8 color="#339AF0" size="2rem" />,
  <IconCircleNumber9 color="#339AF0" size="2rem" />,
]

const points = ['10XP', '7XP', '5XP', '3XP', '2XP']

const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}))

export function LeaderboardCard({ item, index }) {
  //styles
  const { classes } = useStyles()

  return (
    <UnstyledButton key={item.id} className={classes.item}>
      {icons[index]}
      <Text size="xs" mt={7}>
        {item.discord}
      </Text>
      <Text color="dimmed" size="xs">
        {index < 5 ? points[index] : '1XP'}
      </Text>
    </UnstyledButton>
  )
}
