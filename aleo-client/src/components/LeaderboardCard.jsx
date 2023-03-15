import { createStyles, Text, UnstyledButton } from '@mantine/core'
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
import moment from 'moment'

const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}))

export function LeaderboardCard({ item, index }) {
  //styles
  const { classes } = useStyles()
  //mocks
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
  //function that defines the icon
  const setIcon = (index) => {
    return icons[index]
  }

  return (
    <UnstyledButton key={item.id} className={classes.item}>
      {setIcon(index)}
      <Text size="xs" mt={7}>
        {item.discord}
      </Text>
      <Text color="dimmed" size="xs">
        {moment(item.createdAt).fromNow()}
      </Text>
    </UnstyledButton>
  )
}
