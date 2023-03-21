import {
  Grid,
  Container,
  Image,
  createStyles,
  Title,
  Text,
  rem,
  SimpleGrid,
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

  const BASE_HEIGHT = 360

  const getFirstChild = (height) => (
    <Image src={nft1} height={height} radius="md" animate={false} />
  )

  const getSecondChild = (height) => (
    <Image src={nft2} height={height} radius="md" animate={false} />
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
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
            {getFirstChild(BASE_HEIGHT)}
            {getSecondChild(BASE_HEIGHT)}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
