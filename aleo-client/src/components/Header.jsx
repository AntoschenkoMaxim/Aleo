import 'react'
import {
  createStyles,
  Header,
  Group,
  Button,
  Text,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  Container,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  logo: {
    height: 32,
    width: 32,
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  button: {
    width: 125,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const { classes, theme } = useStyles()

  return (
    <Container pb={20}>
      <Header height={60}>
        <Group position="apart" sx={{ height: '100%' }}>
          <Group>
            <Logo className={classes.logo} />
            <Text size={24} weight={700} color="white">
              Aleo Quests
            </Text>
          </Group>

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/rewards" className={classes.link}>
              Rewards
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button
              component="a"
              href="https://t.me/AleoQuests_bot"
              target="_blank"
              className={classes.button}
            >
              Telegram bot
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/rewards" className={classes.link}>
            Rewards
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button
              component="a"
              href="https://t.me/AleoQuests_bot"
              target="_blank"
            >
              Telegram bot
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Container>
  )
}
