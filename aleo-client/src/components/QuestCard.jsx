import { Button, Card, createStyles, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
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
  const { title, description, disabled, handleButtonClick } = quest
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
      <Button
        disabled={activeQuest !== disabled}
        onClick={handleButtonClick}
        fullWidth
      >
        Start
      </Button>
    </Card>
  )
}
