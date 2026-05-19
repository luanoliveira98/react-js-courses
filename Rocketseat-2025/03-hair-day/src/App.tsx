import Icon from "./components/icon";
import Text from "./components/text";
import Title from "./components/title";
import CalendarIcon from "./assets/calendar.svg?react";
import ArrowDownIcon from "./assets/arrow-down.svg?react";
import ArrowRightIcon from "./assets/arrow-right.svg?react";
import ArrowLeftIcon from "./assets/arrow-left.svg?react";
import CloudIcon from "./assets/cloud.svg?react";
import MoonIcon from "./assets/moon.svg?react";
import SunIcon from "./assets/sun.svg?react";
import TrashIcon from "./assets/trash.svg?react";
import UserIcon from "./assets/user.svg?react";
import ButtonIcon from "./components/button-icon";
import Button from "./components/button";
import InputText from "./components/input-text";
import TimeSelect from "./components/time-select";

function App() {
  return (
    <div className="grid gap-10">
      <div className="flex flex-col gap-1">
        <Text>Hello World</Text>
        <Text variant="body-sm">Hello World</Text>
      </div>

      <div className="flex gap-1">
        <Title variant="lg">Hello World</Title>
        <Title>Hello World</Title>
        <Title variant="sm">Hello World</Title>
      </div>

      <div className="flex gap-1">
        <Icon svg={CalendarIcon} className="fill-yellow" />
        <Icon svg={ArrowDownIcon} className="fill-yellow" />
        <Icon svg={ArrowLeftIcon} className="fill-yellow" />
        <Icon svg={ArrowRightIcon} className="fill-yellow" />
        <Icon svg={CloudIcon} className="fill-yellow" />
        <Icon svg={MoonIcon} className="fill-yellow" />
        <Icon svg={SunIcon} className="fill-yellow" />
        <Icon svg={TrashIcon} className="fill-yellow" />
        <Icon svg={UserIcon} className="fill-yellow" />
      </div>

      <div className="flex gap-1">
        <Button>SCHEDULE</Button>
        <Button handling>SCHEDULE</Button>
        <Button disabled>SCHEDULE</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
      </div>

      <div className="flex gap-1">
        <InputText icon={UserIcon} placeholder="Customer name" />
      </div>

      <div className="flex gap-1">
        <TimeSelect name="time">09:00</TimeSelect>
        <TimeSelect name="time">09:00</TimeSelect>
        <TimeSelect name="time" disabled>
          09:00
        </TimeSelect>
      </div>
    </div>
  );
}

export default App;
