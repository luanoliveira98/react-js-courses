import SelectInputDate from "../../components/select-input-date";
import Text from "../../components/text";

export default function AgendaHeader() {
  return (
    <div className="flex flex-wrap gap-3 justify-between">
      <div className="flex flex-col gap-1">
        <Text variant="title-lg">Sua agenda</Text>
        <Text variant="body-sm">
          Consulte os seus cortes de cabelo agendados por dia
        </Text>
      </div>
      <SelectInputDate />
    </div>
  );
}
