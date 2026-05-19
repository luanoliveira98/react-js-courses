import Icon from "../../../components/icon";
import Text from "../../../components/text";
import type React from "react";

interface TimePeriodHeaderProps {
  icon: React.ComponentProps<typeof Icon>["svg"];
  period: string;
  timeGap: string;
}

export default function TimePeriodHeader({
  icon,
  period,
  timeGap,
}: TimePeriodHeaderProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-between items-center px-5 py-3 border-b border-b-gray-600">
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Icon svg={icon} className="fill-yellow" />
        <Text variant="body-sm">{period}</Text>
      </div>
      <Text variant="body-sm" className="text-gray-400">
        {timeGap}
      </Text>
    </div>
  );
}
