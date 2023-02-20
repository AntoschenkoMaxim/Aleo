import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Button,
} from '@mantine/core'
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react'

const mockdata = [
  {
    title: 'Crossword',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: IconGauge,
    button: 'Quest 1',
  },
  {
    title: 'Crossword',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: IconUser,
    button: 'Quest 2',
  },
  {
    title: 'Crossword',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: IconCookie,
    button: 'Quest 3',
  },
]

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

  card: {
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

export function List() {
  const { classes, theme } = useStyles()
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text
        className={classes.cardDescription}
        size="sm"
        color="dimmed"
        mt="sm"
      >
        {feature.description}
      </Text>
      <Button fullWidth>{feature.button}</Button>
    </Card>
  ))
  return (
    <Container size="md" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        List of events about Aleo
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}
