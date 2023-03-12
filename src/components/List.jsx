import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Button,
  Modal,
} from '@mantine/core'
import { useState } from 'react'
import { useDisclosure, useLocalStorage } from '@mantine/hooks'
import {
  IconFlag,
  IconRotateRectangle,
  IconWorldUpload,
  IconMoodCheck,
  IconExclamationCircle,
  IconSpy,
} from '@tabler/icons-react'

import image1 from '../assets/quest1.jpg'
import image2 from '../assets/quest2.jpg'
import image3 from '../assets/quest3.jpg'
import image4 from '../assets/quest4.jpg'
import image5 from '../assets/quest5.jpg'
import image6 from '../assets/quest6.jpg'

import { QuestForm } from './QuestForm'

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

export function List({ reference }) {
  //styles
  const { classes, theme } = useStyles()

  //local-storage
  const [activeQuest, setActiveQuest] = useLocalStorage({
    key: 'active-quest',
    defaultValue: 1,
  })

  console.log(activeQuest)
  //modal
  const [opened, { open, close }] = useDisclosure(false)

  const [modalProps, setModalProps] = useState(null)

  const modalClose = () => {
    close()
    setModalProps(null)
  }

  //click functions
  const handleButton1Click = () => {
    open()
    setModalProps({
      title: 'Quest 1',
      image: image1,
      answer: 'ceremony',
    })
  }

  const handleButton2Click = () => {
    open()
    setModalProps({
      title: 'Quest 2',
      image: image2,
      answer: 'apprentice voyager maestro',
    })
  }

  const handleButton3Click = () => {
    open()
    setModalProps({
      title: 'Quest 3',
      image: image3,
      answer: 'truly private applications',
    })
  }

  const handleButton4Click = () => {
    open()
    setModalProps({
      title: 'Quest 4',
      image: image4,
      answer:
        '97f662b80caeea8788c22d0e855974258e2d9aa54d697d734f244c493c5350d1',
    })
  }

  const handleButton5Click = () => {
    open()
    setModalProps({
      title: 'Quest 5',
      image: image5,
      answer: 'viviane ford',
    })
  }

  const handleButton6Click = () => {
    open()
    setModalProps({
      title: 'Quest 6',
      image: image6,
      answer: 'aleo this is his community',
    })
  }

  const mockdata = [
    {
      title: 'Quest 1',
      description:
        'Immerse yourself in an educationally adventurous journey through the world of Aleo!',
      icon: IconRotateRectangle,
      handleButtonClick: handleButton1Click,
      disabled: 1,
    },
    {
      title: 'Quest 2',
      description:
        'Part of the way passed, but this is just the beginning, there are many more interesting ciphers ahead of you!',
      icon: IconWorldUpload,
      handleButtonClick: handleButton2Click,
      disabled: 2,
    },
    {
      title: 'Quest 3',
      description:
        'Our adventure is in full swing, and everyone has a chance to take the lead.',
      icon: IconMoodCheck,
      handleButtonClick: handleButton3Click,
      disabled: 3,
    },
    {
      title: 'Quest 4',
      description:
        "There's definitely no clue here, don't even get your hopes up. It's somewhere else, oops...",
      icon: IconExclamationCircle,
      handleButtonClick: handleButton4Click,
      disabled: 4,
    },
    {
      title: 'Quest 5',
      description:
        "We're almost at the finish line, don't relax, decipher everything we see!",
      icon: IconSpy,
      handleButtonClick: handleButton5Click,
      disabled: 5,
    },
    {
      title: 'Quest 6',
      description:
        "That's it, the final quest is here, don't even try to enter ALEO as the final answer, it definitely won't work!",
      icon: IconFlag,
      handleButtonClick: handleButton6Click,
      disabled: 6,
    },
  ]

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
      <Button
        disabled={activeQuest !== feature.disabled}
        onClick={feature.handleButtonClick}
        fullWidth
      >
        Start
      </Button>
    </Card>
  ))
  return (
    <Container size="md" py="xl">
      <Title
        ref={reference}
        order={2}
        className={classes.title}
        align="center"
        mt="sm"
      >
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
      {modalProps && (
        <Modal
          opened={opened}
          onClose={modalClose}
          title={modalProps.title}
          centered
        >
          <QuestForm
            modalProps={modalProps}
            activeQuest={activeQuest}
            setActiveQuest={setActiveQuest}
          />
        </Modal>
      )}
    </Container>
  )
}
