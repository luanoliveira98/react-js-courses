import AgendaTimePeriod from "./TimePeriod";
import Sun from "../../assets/icons/sun.svg?react";
import Cloud from "../../assets/icons/cloud.svg?react";
import Moon from "../../assets/icons/moon.svg?react";
import TimePeriodClient from "./TimePeriod/client";

export default function AgendaList() {
  return (
    <div className="flex flex-col gap-3">
      <AgendaTimePeriod icon={Sun} period="Manhã" timeGap="09h-12h">
        <TimePeriodClient id="1" name="Ryan Dorwart" time="11:00" />
      </AgendaTimePeriod>
      <AgendaTimePeriod icon={Cloud} period="Tarde" timeGap="13h-18h">
        <TimePeriodClient id="2" name="Livia Curtis" time="13:00" />
        <TimePeriodClient id="3" name="Randy Calzoni" time="14:00" />
        <TimePeriodClient id="4" name="Marley Franci" time="16:00" />
        <TimePeriodClient id="5" name="Jaylon Korsgaard" time="17:00" />
      </AgendaTimePeriod>
      <AgendaTimePeriod icon={Moon} period="Noite" timeGap="19h-21h">
        <TimePeriodClient id="6" name="Maria Herwitz" time="21:00" />
      </AgendaTimePeriod>
    </div>
  );
}
