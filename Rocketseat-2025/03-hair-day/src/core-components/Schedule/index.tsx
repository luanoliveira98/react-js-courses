import Container from "../../components/container";
import Title from "./title";
import Form from "./form";

export default function Schedule() {
  return (
    <Container
      as="aside"
      className="gap-6 max-w-[34.58%] max-md:max-w-full rounded-xl bg-gray-700"
    >
      <Title />
      <Form />
    </Container>
  );
}
