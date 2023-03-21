import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
  rem,
} from '@mantine/core'
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
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
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
  //styles
  const { classes } = useStyles()

  //mocks
  const references = [
    { href: 'https://twitter.com/AleoHQ', icon: IconBrandTwitter },
    { href: 'https://discord.gg/aleohq', icon: IconBrandDiscord },
    { href: 'https://www.aleo.org/', icon: IconBrandChrome },
  ]

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
          {references.map((reference) => (
            <ActionIcon
              key={reference.href}
              component="a"
              href={reference.href}
              target="_blank"
              size="lg"
            >
              <reference.icon size={18} stroke={1.5} />
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </div>
  )
}
