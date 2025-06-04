import { HandPalm, Play } from "phosphor-react"
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewCycleForm } from "./components/NewCycleForm"
import { Countdown } from "./components/Countdown"
import { useContext } from "react"
import { CyclesContext } from "../../contexts/CyclesContext"

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Report the task'),
  minutesAmount: zod
    .number()
    .min(5, 'The cycle must be a minimun of 60 minutes.')
    .max(60, 'The cycle must be a maximun of 60 minutes.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { 
    createNewCycle, 
    interruptCurrentCycle, 
    activeCycle 
  } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, /*reset*/ } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />              

        { activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24}/>
            Interrupt
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24}/>
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}