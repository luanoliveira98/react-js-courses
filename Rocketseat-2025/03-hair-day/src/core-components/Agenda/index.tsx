import { useState } from "react";
import Container from "../../components/container";
import Header from "./header";
import List from "./list";

export default function ScheduleList() {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );

  const handleSelectedDate = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <Container className="gap-8">
      <Header handleSelectedDate={handleSelectedDate} date={selectedDate} />
      <List date={selectedDate} />
    </Container>
  );
}
