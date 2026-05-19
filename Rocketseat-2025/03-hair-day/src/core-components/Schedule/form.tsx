import Button from "../../components/button";
import InputText from "../../components/input-text";
import SelectInputDate from "../../components/select-input-date";
import Text from "../../components/text";
import TimeSelect from "../../components/time-select";
import User from "../../assets/icons/user.svg?react";

interface TimePeriod {
  id: string;
  label: string;
  timeSlots: string[];
}

export default function ScheduleForm() {
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

  return (
    <form className="flex flex-col gap-8">
      <label className="flex flex-col gap-2">
        <Text variant="title-md">Data</Text>
        <SelectInputDate />
      </label>

      <div className="flex flex-col gap-2">
        <Text variant="title-md">Horários</Text>

        {timePeriods.map((timePeriod) => (
          <div key={timePeriod.id}>
            <Text variant="title-sm">{timePeriod.label}</Text>

            <div className="flex flex-wrap gap-2">
              {timePeriod.timeSlots.map((timeSlot) => (
                <TimeSelect name="time" key={timeSlot}>
                  {timeSlot}
                </TimeSelect>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <Text variant="title-md">Cliente</Text>
        <InputText icon={User} required placeholder="Nome do cliente" />
      </div>

      <Button type="submit" className="w-full">
        AGENDAR
      </Button>
    </form>
  );
}
