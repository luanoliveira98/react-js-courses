import Button from "../../components/button";
import InputText from "../../components/input-text";
import SelectInputDate from "../../components/select-input-date";
import Text from "../../components/text";
import TimeSelect from "../../components/time-select";
import User from "../../assets/icons/user.svg?react";
import useSchedules from "../../hooks/use-schedules";
import { useState } from "react";

interface TimePeriod {
  id: string;
  label: string;
  timeSlots: string[];
}

export default function ScheduleForm() {
  const { createSchedule, fetchDateSchedules } = useSchedules();
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [resetKey, setResetKey] = useState(0);

  const timePeriods: TimePeriod[] = [
    {
      id: "morning",
      label: "Manhã",
      timeSlots: ["09:00", "10:00", "11:00", "12:00"],
    },
    {
      id: "afternoon",
      label: "Tarde",
      timeSlots: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    },
    {
      id: "night",
      label: "Noite",
      timeSlots: ["19:00", "20:00", "21:00"],
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const schedule = {
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      customer: formData.get("customer") as string,
    };

    createSchedule(schedule);

    event.currentTarget.reset();

    setSelectedDate(null);
    setResetKey((prev) => prev + 1);
  };

  const handleSelectedDate = (date: string) => {
    setSelectedDate(date);
  };

  const schedules = fetchDateSchedules(selectedDate);

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2">
        <Text variant="title-md">Data</Text>
        <SelectInputDate
          key={resetKey}
          name="date"
          required
          value={selectedDate}
          onChange={(e) => handleSelectedDate(e.target.value)}
        />
      </label>

      <div className="flex flex-col gap-2">
        <Text variant="title-md">Horários</Text>

        {timePeriods.map((timePeriod) => (
          <div key={timePeriod.id}>
            <Text variant="title-sm">{timePeriod.label}</Text>

            <div className="flex flex-wrap gap-2">
              {timePeriod.timeSlots.map((timeSlot) => (
                <TimeSelect
                  name="time"
                  key={timeSlot}
                  disabled={schedules.some(
                    (schedule) => schedule.time === timeSlot,
                  )}
                >
                  {timeSlot}
                </TimeSelect>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <Text variant="title-md">Cliente</Text>
        <InputText
          icon={User}
          name="customer"
          required
          placeholder="Nome do cliente"
        />
      </div>

      <Button type="submit" className="w-full">
        AGENDAR
      </Button>
    </form>
  );
}
