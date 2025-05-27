import { HandPalm, Play } from "phosphor-react"
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, StopCountdownButton, TaskInput } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from "react"
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Report the task'),
    minutesAmount: zod
        .number()
        .min(5, 'The cycle must be a minimun of 60 minutes.')
        .max(60, 'The cycle must be a maximun of 60 minutes.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptDate?: Date
    finishedDate?: Date
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    useEffect(() => {
        let interval: number;

        if(activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(
                    new Date(), 
                    activeCycle.startDate
                )

                if (secondsDifference >= totalSeconds) {
                    setCycles((state) => 
                        state.map(cycle => {
                            if (cycle.id === activeCycleId) {
                                return { ...cycle, finishedDate: new Date() }
                            } else {
                                return cycle
                            }
                        })
                    )

                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(interval)
                } else {
                    setAmountSecondsPassed(secondsDifference)
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, totalSeconds, activeCycleId])

    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)
        setAmountSecondsPassed(0)

        reset()
    }

    function handleInterruptCycle() {
        setCycles(state => 
            state.map(cycle => {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, interruptDate: new Date() }
                } else {
                    return cycle
                }
            })
        )
        
        setActiveCycleId(null)
    }

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmounts = Math.floor(currentSeconds / 60)
    const secondsAmounts = currentSeconds % 60

    const minutes = String(minutesAmounts).padStart(2, '0')
    const seconds = String(secondsAmounts).padStart(2, '0')

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">I will work on</label>
                    <TaskInput 
                        id="task"
                        list="task-suggestions"
                        placeholder="Name your project"
                        disabled={!!activeCycle}
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Project-1" />
                        <option value="Project-2" />
                        <option value="Project-3" />
                    </datalist>

                    <label htmlFor="minutesAmount">during</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        disabled={!!activeCycle}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutes</span>
                </FormContainer>

                <CountdownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdownContainer>

                { activeCycle ? (
                    <StopCountdownButton onClick={handleInterruptCycle} type="button">
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