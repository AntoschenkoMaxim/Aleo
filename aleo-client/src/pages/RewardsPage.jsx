import {
  Grid,
  Container,
  Image,
  createStyles,
  Title,
  Text,
  rem,
  SimpleGrid,
  Stack,
  px,
  useMantineTheme,
} from '@mantine/core'
import { nft1, nft2 } from '../assets/index'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 650,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

export function RewardsPage() {
  //styles
  const { classes } = useStyles()
  const theme = useMantineTheme()

  const BASE_HEIGHT = 360
  const getSubHeight = (children, spacing) =>
    BASE_HEIGHT / children - spacing * ((children - 1) / children)

  const getFirstChild = (height) => (
    <Image src={nft1} height={height} radius="md" animate={false} />
  )

  const getSecondChild = (height) => (
    <Image src={nft2} height={height} radius="md" animate={false} />
  )

  const getThirdChild = (height) => (
    <Title className={classes.title}>
      About our <br />
      NFTs
    </Title>
  )

  const getFourthChild = (height) => (
    <Text height={height} radius="md" color="dimmed">
      The NFTs have varying rarity and unique characteristics, and a total of
      500 will be distributed to ambassadors and quest winners.
    </Text>
  )

  const getFivethChild = (height) => (
    <Title className={classes.title}>Engaging experience</Title>
  )

  const getSixthChild = (height) => (
    <Text height={height} radius="md" color="dimmed">
      This system provides multiple ways for learners to earn rewards and
      participate in the ecosystem, creating an engaging experience.
    </Text>
  )

  return (
    <Container my="md">
      <Grid>
        <Grid.Col xs={12}>
          <Title className={classes.title} align="center" mt="sm">
            Rewards
          </Title>
          <Text
            mb={50}
            color="dimmed"
            className={classes.description}
            align="center"
            mt="md"
          >
            The Aleo Quests offers a rewards system for learners who participate
            in educational activities. Users can earn Aleo points and unique
            NFTs that are built on the Aleo blockchain.
          </Text>
        </Grid.Col>
        <Grid.Col xs={12}>
          <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
            {getFirstChild(BASE_HEIGHT)}
            <Stack>
              {getThirdChild(getSubHeight(2, px(theme.spacing.md)))}
              {getFourthChild(getSubHeight(1, px(theme.spacing.md)))}
            </Stack>
            {getSecondChild(BASE_HEIGHT)}
            <Stack>
              {getFivethChild(getSubHeight(2, px(theme.spacing.md)))}
              {getSixthChild(getSubHeight(1, px(theme.spacing.md)))}
            </Stack>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
