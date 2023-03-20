import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { hero } from '../assets/index'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing.xl * 3,
    [theme.fn.smallerThan('md')]: {
      paddingBottom: theme.spacing.xl,
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
    [theme.fn.smallerThan('md')]: {
      maxWidth: 400,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}))

export function Hero({ scroll }) {
  //styles
  const { classes } = useStyles()

  return (
    <Container mt={45}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            This is <span className={classes.highlight}>Quests</span> about{' '}
            <br /> Aleo Eco-System
          </Title>
          <Text color="dimmed" mt="md">
            Educational quests to test your knowledge of ZKP and Aleo technology
          </Text>

          <List
            mt={45}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Aleo Points</b> – be one of the first to complete our quests
              and get points (it is a means of payment in the Aleo Ambassador
              program).
            </List.Item>
            <List.Item mt={30}>
              <b>NFT Collection</b> – art from the collection of early and
              interested members of the Aleo community.
            </List.Item>
          </List>

          <Group mt={60}>
            <Button
              fullWidth
              size="md"
              className={classes.control}
              onClick={() => scroll({ alignment: 'start' })}
            >
              Get started
            </Button>
          </Group>
        </div>
        <Image src={hero} className={classes.image} />
      </div>
    </Container>
  )
}
