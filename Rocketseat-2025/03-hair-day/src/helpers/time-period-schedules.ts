import type { Schedule } from "../models/schedule";

export function timePeriodSchedules(schedules: Schedule[]) {
  const morningSchedules = schedules.filter((schedule) => {
    const hour = parseInt(schedule.time.split(":")[0]);
    return hour <= 12;
  });

  const afternoonSchedules = schedules.filter((schedule) => {
    const hour = parseInt(schedule.time.split(":")[0]);
    return hour >= 13 && hour <= 18;
  });

  const nightSchedules = schedules.filter((schedule) => {
    const hour = parseInt(schedule.time.split(":")[0]);
    return hour >= 19;
  });

  return { morningSchedules, afternoonSchedules, nightSchedules };
}
