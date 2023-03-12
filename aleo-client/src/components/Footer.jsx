import { createStyles, Container, Group, ActionIcon, Text } from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandDiscord,
  IconBrandChrome,
} from '@tabler/icons-react'

import { ReactComponent as Logo } from '../assets/logo.svg'

const useStyles = createStyles((theme) => ({
  logo: {
    height: 32,
    width: 32,
  },

  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

export function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <Logo className={classes.logo} />
          <Text size={18} weight={700} color="white">
            Aleo Quests
          </Text>
        </Group>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            component="a"
            href="https://twitter.com/AleoHQ"
            target="_blank"
            size="lg"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://discord.gg/aleohq"
            target="_blank"
            size="lg"
          >
            <IconBrandDiscord size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.aleo.org/"
            target="_blank"
            size="lg"
          >
            <IconBrandChrome size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}