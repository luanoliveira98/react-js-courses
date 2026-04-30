import useLocalStorageState from "use-local-storage-state";
import { type Task, TASKS_KEY } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
