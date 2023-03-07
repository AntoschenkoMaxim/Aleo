import { useForm } from '@mantine/form'
import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Button,
  Modal,
  TextInput,
  Stepper,
  Alert,
  Image,
  Code,
  Grid,
  Col,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconBrandDiscord,
  IconQuestionCircle,
  IconGift,
  IconAlertCircle,
} from '@tabler/icons-react'
import { useState } from 'react'

import image1 from '../assets/quest1.jpg'

const mockdata = [
  {
    title: 'Quest 1',
    description:
      'Immerse yourself in an educationally adventurous journey through the world of Aleo!',
    icon: IconGauge,
    button: 'Start',
  },
  {
    title: 'Quest 2',
    description:
      'Part of the way passed, but this is just the beginning, there are many more interesting ciphers ahead of you!',
    icon: IconUser,
    button: 'Start',
  },
  {
    title: 'Quest 3',
    description:
      'Our adventure is in full swing, and everyone has a chance to take the lead.',
    icon: IconCookie,
    button: 'Start',
  },
  {
    title: 'Quest 4',
    description:
      "There's definitely no clue here, don't even get your hopes up. It's somewhere else, oops...",
    icon: IconCookie,
    button: 'Start',
  },
  {
    title: 'Quest 5',
    description:
      "We're almost at the finish line, don't relax, decipher everything we see!",
    icon: IconCookie,
    button: 'Start',
  },
  {
    title: 'Quest 6',
    description:
      "That's it, the final quest is here, don't even try to enter ALEO as the final answer, it definitely won't work!",
    icon: IconCookie,
    button: 'Start',
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

export function List() {
  //styles
  const { classes, theme } = useStyles()

  //modal
  const [opened, { open, close }] = useDisclosure(false)

  //stepper
  const [active, setActive] = useState(0)
  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current
      }
      return current < 3 ? current + 1 : current
    })
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))

  //forms
  const form = useForm({
    initialValues: {
      discord: '',
      answer: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          discord: /^.{3,32}#[0-9]{4}$/.test(values.discord)
            ? null
            : 'Invalid discord!',
        }
      }
      if (active === 1) {
        return {
          answer:
            values.answer.trim().toLowerCase() === 'ceremony'
              ? null
              : 'Wrong answer, please try again!',
        }
      }
    },
  })

  const [modalProps, setModalProps] = useState(null)

  const handleButtonClick = ({ quest }) => {
    switch (quest) {
      case 'Quest 1':
        setModalProps({
          title: 'Quest 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          task: 'Crossword',
          image: '',
        })
        break
      case 'Quest 2':
        setModalProps({
          title: 'Quest 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          task: 'Crossword',
          image: '',
        })
        break
    }
  }

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
      <Button onClick={open} fullWidth>
        {feature.button}
      </Button>
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
        Complete a series of our quests, learn a lot about Aleo and get rewards!
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
      <Modal opened={opened} onClose={close} title="Crossword" centered>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stepper size="xs" active={active}>
            <Stepper.Step icon={<IconBrandDiscord size={18} />}>
              <Alert icon={<IconAlertCircle />} title="Bummer!" mt="md">
                After successfully completing the quest, it will be impossible
                to try again.
              </Alert>
              <TextInput
                mt="sm"
                withAsterisk
                label="Discord handle"
                icon={<IconBrandDiscord size={18} />}
                placeholder="Andrew#4355"
                {...form.getInputProps('discord')}
              />
            </Stepper.Step>
            <Stepper.Step icon={<IconQuestionCircle size={18} />}>
              <Image mt="md" radius="sm" src={image1} />
              <TextInput
                mt="sm"
                withAsterisk
                label="Answer"
                icon={<IconQuestionCircle size={18} />}
                placeholder="Ceremony"
                {...form.getInputProps('answer')}
              />
            </Stepper.Step>
            <Stepper.Step icon={<IconGift size={18} />}>
              <>
                <Alert
                  icon={<IconGift />}
                  title="Successfully completed!"
                  mt="md"
                  color="green"
                >
                  You have successfully completed the quest, now you can view
                  your results in the leaderboard section.
                </Alert>
              </>
            </Stepper.Step>
            <Stepper.Completed>
              Completed! Form values:
              <Code block mt="xl">
                {JSON.stringify(form.values, null, 2)}
              </Code>
            </Stepper.Completed>
          </Stepper>
          <Grid mt="md" span={12}>
            {active !== 0 && (
              <Col span={12} md={active === 3 ? 12 : 5}>
                <Button fullWidth variant="default" onClick={prevStep}>
                  Back
                </Button>
              </Col>
            )}
            {active !== 3 && (
              <Col span={12} md={active === 0 ? 12 : 7}>
                <Button fullWidth onClick={nextStep}>
                  {active === 2 ? 'Leaderboard' : 'Next step'}
                </Button>
              </Col>
            )}
          </Grid>
        </form>
      </Modal>
    </Container>
  )
}
