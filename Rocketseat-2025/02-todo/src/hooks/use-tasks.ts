import useLocalStorageState from "use-local-storage-state";
import { type Task, TASKS_KEY, TaskState } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/util";

export default function useTasks() {
  const [tasksData] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
