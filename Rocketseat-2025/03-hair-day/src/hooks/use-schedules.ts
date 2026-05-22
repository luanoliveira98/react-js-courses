import useLocalStorageState from "use-local-storage-state";
import { type Schedule, SCHEDULES_KEY } from "../models/schedule";

export default function useSchedules() {
  const [schedules, setSchedules] = useLocalStorageState<Schedule[]>(
    SCHEDULES_KEY,
    {
      defaultValue: [],
    },
  );

  function fetchDateSchedules(date: string) {
    return schedules.filter((schedule) => schedule.date === date);
  }

  function createSchedule(payload: Omit<Schedule, "id">) {
    const newSchedule = {
      id: Math.random().toString(36).substr(2, 9),
      date: payload.date,
      time: payload.time,
      customer: payload.customer,
    };
    setSchedules([...schedules, newSchedule]);
  }

  function deleteSchedule(id: string) {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  }

  return {
    schedules,
    fetchDateSchedules,
    createSchedule,
    deleteSchedule,
  };
}
