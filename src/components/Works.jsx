import { Title, Text, Container, createStyles, Stepper } from '@mantine/core'

import {
  IconFileImport,
  IconBrandDiscord,
  IconGift,
  IconQuestionCircle,
} from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

export function Works() {
  const { classes } = useStyles()
  return (
    <Container size="md" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        How it works?
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Here will be a quick guide, about what and how to do in our quests to
        become a winner.
      </Text>

      <Stepper
        active={4}
        mt={50}
        className={classes.stepper}
        orientation="vertical"
      >
        <Stepper.Step
          completedIcon={<IconFileImport size={18} />}
          label="Go to the Quest"
          description="In order to proceed to the quest, select the last quest available to you and click on the button of this quest."
        />
        <Stepper.Step
          completedIcon={<IconBrandDiscord size={18} />}
          label="Complete your discord"
          description="In order to start the execution you need to enter your discord and start the quest."
        />
        <Stepper.Step
          completedIcon={<IconQuestionCircle size={18} />}
          label="Complete quest"
          description="After filling in the discord, you can proceed with the quest."
        />
        <Stepper.Step
          completedIcon={<IconGift size={18} />}
          label="Get a prize"
          description="After completing the quest, you will take any place and, in accordance with it, you will receive your reward."
        />
      </Stepper>
    </Container>
  )
}
