import {
  createStyles,
  Title,
  Text,
  SimpleGrid,
  Container,
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

import { quest1, quest2, quest3, quest4, quest5, quest6 } from '../assets/index'
import { QuestCard, QuestForm } from './index'

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
}))

export function List({ reference }) {
  //styles
  const { classes } = useStyles()

  //local-storage
  const [activeQuest, setActiveQuest] = useLocalStorage({
    key: 'active-quest',
    defaultValue: 1,
  })

  const [activeDiscord, setActiveDiscord] = useLocalStorage({
    key: 'active-discord',
    defaultValue: null,
  })

  //modal
  const [opened, { open, close }] = useDisclosure(false)

  const [modalProps, setModalProps] = useState(null)

  const handleModalClose = () => {
    close()
    setModalProps(null)
  }

  //array of datas
  const images = [quest1, quest2, quest3, quest4, quest5, quest6]
  const answers = [
    'ceremony',
    'apprentice voyager maestro',
    'truly private applications',
    '97f662b80caeea8788c22d0e855974258e2d9aa54d697d734f244c493c5350d1',
    'viviane ford',
    'aleo this is his community',
  ]

  //click function
  const handleButtonClick = (index) => {
    open()
    setModalProps({
      questNumber: index,
      title: `Quest ${index}`,
      image: images[index - 1],
      answer: answers[index - 1],
    })
  }

  //mocks
  const mockdata = [
    {
      index: 1,
      title: 'Quest 1',
      description:
        'Immerse yourself in an educationally adventurous journey through the world of Aleo!',
      icon: IconRotateRectangle,
      handleButtonClick: () => handleButtonClick(1),
      index: 1,
    },
    {
      index: 2,
      title: 'Quest 2',
      description:
        'Part of the way passed, but this is just the beginning, there are many more interesting ciphers ahead of you!',
      icon: IconWorldUpload,
      handleButtonClick: () => handleButtonClick(2),
      index: 2,
    },
    {
      index: 3,
      title: 'Quest 3',
      description:
        'Our adventure is in full swing, and everyone has a chance to take the lead.',
      icon: IconMoodCheck,
      handleButtonClick: () => handleButtonClick(3),
      index: 3,
    },
    {
      index: 4,
      title: 'Quest 4',
      description:
        "There's definitely no clue here, don't even get your hopes up. It's somewhere else, oops...",
      icon: IconExclamationCircle,
      handleButtonClick: () => handleButtonClick(index),
    },
    {
      index: 5,
      title: 'Quest 5',
      description:
        "We're almost at the finish line, don't relax, decipher everything we see!",
      icon: IconSpy,
      handleButtonClick: () => handleButtonClick(index),
    },
    {
      index: 6,
      title: 'Quest 6',
      description:
        "That's it, the final quest is here, don't even try to enter ALEO as the final answer, it definitely won't work!",
      icon: IconFlag,
      handleButtonClick: () => handleButtonClick(index),
    },
  ]

  const quests = mockdata.map((quest) => (
    <QuestCard
      key={quest.title}
      quest={quest}
      activeQuest={activeQuest}
      modalProps={modalProps}
    />
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
        {quests}
      </SimpleGrid>
      {modalProps && (
        <Modal
          opened={opened}
          onClose={handleModalClose}
          title={modalProps.title}
          centered
        >
          <QuestForm
            modalProps={modalProps}
            handleModalClose={handleModalClose}
            activeDiscord={activeDiscord}
            setActiveDiscord={setActiveDiscord}
            activeQuest={activeQuest}
            setActiveQuest={setActiveQuest}
          />
        </Modal>
      )}
    </Container>
  )
}
