import Text from "../../components/text";

export default function ScheduleTitle() {
  return (
    <div className="flex flex-col gap-1">
      <Text as="h1" variant="title-lg">
        Agende um atendimento
      </Text>
      <Text variant="body-sm">
        Selecione data, horário e informe o nome do cliente para criar o
        agendamento
      </Text>
    </div>
  );
}
