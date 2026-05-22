import ButtonIcon from "../../../components/button-icon";
import Text from "../../../components/text";
import Trash from "../../../assets/icons/trash.svg?react";
import useSchedules from "../../../hooks/use-schedules";

interface TimePeriodClientProps {
  id: string;
  customer: string;
  time: string;
}

export default function TimePeriodClient({
  id,
  customer,
  time,
}: TimePeriodClientProps) {
  const { deleteSchedule } = useSchedules();

  function handleDeleteSchedule() {
    deleteSchedule(id);
  }

  return (
    <div className="flex flex-wrap gap-5 justify-between items-center py-0.5">
      <div className="flex flex-wrap items-center justify-center gap-5">
        <Text variant="title-md">{time}</Text>
        <Text>{customer}</Text>
      </div>
      <ButtonIcon
        icon={Trash}
        className="fill-yellow"
        onClick={handleDeleteSchedule}
      />
    </div>
  );
}
