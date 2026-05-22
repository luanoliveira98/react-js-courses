import Icon from "../../../components/icon";
import type React from "react";
import Header from "./header";
import Clients from "./clients";
import type { Schedule } from "../../../models/schedule";
import Client from "./client";
import Text from "../../../components/text";

interface TimePeriodProps {
  icon: React.ComponentProps<typeof Icon>["svg"];
  period: string;
  timeGap: string;
  schedules: Schedule[];
}

export default function TimePeriod({
  icon,
  period,
  timeGap,
  schedules,
}: TimePeriodProps) {
  return (
    <div className="border border-gray-600 rounded-lg">
      <Header icon={icon} period={period} timeGap={timeGap} />
      <Clients>
        {schedules.map((schedule) => (
          <Client key={schedule.id} {...schedule} />
        ))}
        {schedules.length === 0 && (
          <Text variant="body-sm" className="text-gray-400">
            Não há clientes agendados para esse período.
          </Text>
        )}
      </Clients>
    </div>
  );
}
