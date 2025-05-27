import { FormContainer, TaskInput, MinutesAmountInput } from "./styles"

export function NewCycleForm() {
  return (
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
  )
}