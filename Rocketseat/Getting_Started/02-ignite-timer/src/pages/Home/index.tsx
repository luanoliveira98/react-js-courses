import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButtomContainer, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Report the task'),
    minutesAmount: zod
        .number()
        .min(5, 'The cycle must be a minimun of 60 minutes.')
        .max(60, 'The cycle must be a maximun of 60 minutes.'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data);
        reset();
    }

    const task = watch('task');
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">I will work on</label>
                    <TaskInput 
                        id="task"
                        list="task-suggestions"
                        placeholder="Name your project"
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
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutes</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButtomContainer disabled={isSubmitDisabled} type="submit">
                    <Play size={24}/>
                    Start
                </StartCountdownButtomContainer>
            </form>
        </HomeContainer>
    )
}