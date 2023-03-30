import {
  Grid,
  Container,
  Image,
  createStyles,
  Title,
  Text,
  rem,
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
            in educational activities. Users can earn unique NFTs that are built
            on the Aleo blockchain.
          </Text>
        </Grid.Col>
        <Grid.Col xs={6}>
          <Image src={nft1} radius="md" />
        </Grid.Col>
        <Grid.Col xs={6}>
          <Image src={nft2} radius="md" />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
