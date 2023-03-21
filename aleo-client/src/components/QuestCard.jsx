import { Button, Card, createStyles, Text, Modal, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Leaderboard } from './index'

const useStyles = createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },

  cardDescription: {
    marginBottom: theme.spacing.md,
  },
}))

export function QuestCard({ quest, activeQuest }) {
  //styles
  const { classes, theme } = useStyles()

  //destructurization
  const { title, description, index, handleButtonClick } = quest

  //modals
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <Card key={title} shadow="md" radius="md" className={classes.card} p="xl">
      <quest.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text
        className={classes.cardDescription}
        size="sm"
        color="dimmed"
        mt="sm"
      >
        {description}
      </Text>
      {activeQuest <= index ? (
        <Button
          disabled={activeQuest !== index}
          onClick={handleButtonClick}
          fullWidth
        >
          Start
        </Button>
      ) : (
        <Button variant="light" onClick={open} fullWidth>
          Leaderboard
        </Button>
      )}
      <Modal opened={opened} onClose={close} title="Leaderboard" centered>
        <Leaderboard questNumber={index} />
      </Modal>
    </Card>
  )
}
