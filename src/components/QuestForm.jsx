import { useForm } from '@mantine/form'
import {
  Button,
  TextInput,
  Stepper,
  Alert,
  Image,
  Code,
  Grid,
  Col,
} from '@mantine/core'
import {
  IconBrandDiscord,
  IconQuestionCircle,
  IconGift,
  IconAlertCircle,
} from '@tabler/icons-react'
import { useState } from 'react'

export function QuestForm({ modalProps }) {
  //destructurization
  const { title, answer, image } = modalProps
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
            values.answer.trim().toLowerCase() === answer
              ? null
              : 'Wrong answer, please try again!',
        }
      }
    },
  })

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stepper size="xs" active={active}>
        <Stepper.Step icon={<IconBrandDiscord size={18} />}>
          <Alert icon={<IconAlertCircle />} title="Bummer!" mt="md">
            After successfully completing the quest, it will be impossible to
            try again.
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
          <Image mt="md" radius="sm" src={image} />
          <TextInput
            mt="sm"
            withAsterisk
            label="Answer"
            icon={<IconQuestionCircle size={18} />}
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
  )
}
