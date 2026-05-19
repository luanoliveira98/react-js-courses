import Icon from "../../../components/icon";
import type React from "react";
import Header from "./header";
import Clients from "./clients";

interface TimePeriodProps {
  icon: React.ComponentProps<typeof Icon>["svg"];
  period: string;
  timeGap: string;
  children?: React.ReactNode;
}

export default function TimePeriod({
  icon,
  period,
  timeGap,
  children,
}: TimePeriodProps) {
  return (
    <div className="border border-gray-600 rounded-lg">
      <Header icon={icon} period={period} timeGap={timeGap} />
      <Clients>{children}</Clients>
    </div>
  );
}
