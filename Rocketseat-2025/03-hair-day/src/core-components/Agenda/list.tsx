import AgendaTimePeriod from "./TimePeriod";
import Sun from "../../assets/icons/sun.svg?react";
import Cloud from "../../assets/icons/cloud.svg?react";
import Moon from "../../assets/icons/moon.svg?react";
import useSchedules from "../../hooks/use-schedules";
import { timePeriodSchedules } from "../../helpers/time-period-schedules";

interface AgendaListProps {
  date: string;
}

export default function AgendaList({ date }: AgendaListProps) {
  const { fetchDateSchedules } = useSchedules();

  const schedules = fetchDateSchedules(date);

  const { morningSchedules, afternoonSchedules, nightSchedules } =
    timePeriodSchedules(schedules);

  return (
    <div className="flex flex-col gap-3">
      <AgendaTimePeriod
        icon={Sun}
        period="Manhã"
        timeGap="09h-12h"
        schedules={morningSchedules}
      />
      <AgendaTimePeriod
        icon={Cloud}
        period="Tarde"
        timeGap="13h-18h"
        schedules={afternoonSchedules}
      />
      <AgendaTimePeriod
        icon={Moon}
        period="Noite"
        timeGap="19h-21h"
        schedules={nightSchedules}
      />
    </div>
  );
}
