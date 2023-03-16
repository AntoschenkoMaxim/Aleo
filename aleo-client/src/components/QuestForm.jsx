import { useForm } from '@mantine/form'
import {
  Button,
  TextInput,
  Stepper,
  Alert,
  Image,
  Grid,
  Col,
  Card,
  Group,
  Text,
  createStyles,
  SimpleGrid,
  UnstyledButton,
} from '@mantine/core'
import {
  IconBrandDiscord,
  IconQuestionCircle,
  IconGift,
  IconAlertCircle,
  IconChecks,
} from '@tabler/icons-react'
import { useState } from 'react'
import { useGetUsersByQuestQuery, useAddUserMutation } from '../redux/questApi'
import { LeaderboardCard } from './LeaderboardCard'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}))

export function QuestForm({
  modalProps,
  handleModalClose,
  activeDiscord,
  setActiveDiscord,
  activeQuest,
  setActiveQuest,
}) {
  //styles
  const { classes } = useStyles()
  //destructurization
  const { questNumber, title, answer, image } = modalProps
  //forms
  const form = useForm({
    initialValues: {
      discord: activeDiscord !== null ? activeDiscord : '',
      answer: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          discord: /^.{3,32}#[0-9]{4}$/.test(values.discord)
            ? null
            : 'Wrong discord, please try again!',
        }
      }
      if (active === 1) {
        return {
          answer:
            values.answer.trim().toLowerCase() === answer
              ? null
              : 'Wrong answer, please try again!',
        }
      }
    },
  })
  //local storage
  const updateActiveDiscord = () => {
    if (!form.validate().hasErrors) {
      nextStep()
      setActiveDiscord(form.values.discord)
    }
  }
  const updateActiveQuest = () => {
    if (!form.validate().hasErrors) {
      nextStep()
      handleAddUser()
      setActiveQuest(activeQuest + 1)
    }
  }
  //stepper
  const [active, setActive] = useState(0)
  const nextStep = () => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current
      }
      return current < 3 ? current + 1 : current
    })
  }
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))
  //redux
  const limit = 9
  const { data = [], isLoading } = useGetUsersByQuestQuery({
    questNumber,
    limit,
  })
  const [addUser, { isError }] = useAddUserMutation()
  const handleAddUser = async () => {
    await addUser({
      method: 'website',
      discord: form.values.discord,
      questNumber: questNumber,
    }).unwrap()
  }

  const handleButtonEvents = () => {
    return active === 0
      ? updateActiveDiscord
      : active === 1
      ? updateActiveQuest
      : active === 3
      ? handleModalClose
      : nextStep
  }

  const handleButtonName = () => {
    return active === 2
      ? 'Leaderboard'
      : active === 3
      ? 'Continue'
      : 'Next step'
  }

  const items = data.map((item, index) => (
    <LeaderboardCard key={item.id} item={item} index={index} />
  ))

  return (
    <form>
      <Stepper size="xs" active={active}>
        <Stepper.Step icon={<IconBrandDiscord size={18} />}>
          <Alert
            variant="outline"
            icon={<IconAlertCircle />}
            title="Bummer!"
            mt="md"
          >
            After successfully completing the {title}, it will be impossible to
            try again.
          </Alert>
          <TextInput
            mt="sm"
            withAsterisk
            icon={<IconBrandDiscord size={18} />}
            rightSection={
              activeDiscord !== null && <IconChecks color="#339AF0" size={18} />
            }
            label="Discord handle"
            placeholder="Andrew#4355"
            value={activeDiscord !== null && activeDiscord}
            disabled={activeDiscord !== null}
            {...form.getInputProps('discord')}
          />
        </Stepper.Step>
        <Stepper.Step icon={<IconQuestionCircle size={18} />}>
          <Image mt="md" radius="sm" src={image} />
          <TextInput
            mt="sm"
            withAsterisk
            icon={<IconQuestionCircle size={18} />}
            label="Answer"
            placeholder="Your answer"
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
              You have successfully completed the {title}, now you can view your
              results in the leaderboard section.
            </Alert>
          </>
        </Stepper.Step>
        <Stepper.Completed>
          <Card withBorder radius="md" className={classes.card}>
            <Group position="apart">
              <Text className={classes.title}>Winners</Text>
              <Text size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                + 21 other
              </Text>
            </Group>
            <SimpleGrid cols={3} mt="md">
              {items}
            </SimpleGrid>
          </Card>
        </Stepper.Completed>
      </Stepper>
      <Grid mt="md" span={12}>
        {active !== 0 && active !== 2 && (
          <Col span={12} md={5}>
            <Button fullWidth variant="default" onClick={prevStep}>
              Back
            </Button>
          </Col>
        )}
        <Col span={12} md={active === 0 || active === 2 ? 12 : 7}>
          <Button fullWidth onClick={handleButtonEvents()}>
            {handleButtonName()}
          </Button>
        </Col>
      </Grid>
    </form>
  )
}
