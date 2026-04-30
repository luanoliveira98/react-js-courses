import useLocalStorageState from "use-local-storage-state";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substr(2, 9),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  return {
    prepareTask,
  };
}
