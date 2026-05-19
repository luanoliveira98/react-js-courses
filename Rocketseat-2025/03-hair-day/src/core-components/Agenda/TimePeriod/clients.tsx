import type React from "react";
import Text from "../../../components/text";

interface TimePeriodClients {
  children?: React.ReactNode;
}

export default function TimePeriodClients({ children }: TimePeriodClients) {
  return (
    <div className="gap-0.5 flex flex-col p-4">
      {children || (
        <Text variant="body-sm" className="text-gray-400">
          Não há clientes agendados para esse período.
        </Text>
      )}
    </div>
  );
}
