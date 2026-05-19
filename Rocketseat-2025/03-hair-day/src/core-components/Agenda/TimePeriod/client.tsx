import ButtonIcon from "../../../components/button-icon";
import Text from "../../../components/text";
import Trash from "../../../assets/icons/trash.svg?react";

interface TimePeriodClientProps {
  id: string;
  name: string;
  time: string;
}

export default function TimePeriodClient({
  id,
  name,
  time,
}: TimePeriodClientProps) {
  function handleDeleteAgenda() {
    console.log(id);
  }

  return (
    <div className="flex flex-wrap gap-5 justify-between items-center py-0.5">
      <div className="flex flex-wrap items-center justify-center gap-5">
        <Text variant="title-md">{time}</Text>
        <Text>{name}</Text>
      </div>
      <ButtonIcon
        icon={Trash}
        className="fill-yellow"
        onClick={handleDeleteAgenda}
      />
    </div>
  );
}
