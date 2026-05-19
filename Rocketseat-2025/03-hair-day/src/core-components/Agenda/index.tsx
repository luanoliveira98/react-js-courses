import Container from "../../components/container";
import Header from "./header";
import List from "./list";

export default function ScheduleList() {
  return (
    <Container className="gap-8">
      <Header />
      <List />
    </Container>
  );
}
