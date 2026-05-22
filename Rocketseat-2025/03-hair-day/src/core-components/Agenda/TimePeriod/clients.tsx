import type React from "react";

interface TimePeriodClients {
  children?: React.ReactNode;
}

export default function TimePeriodClients({ children }: TimePeriodClients) {
  return <div className="gap-0.5 flex flex-col p-4">{children}</div>;
}
