import AppName from "./core-components/AppName";
import Schedule from "./core-components/Schedule";
import Agenda from "./core-components/Agenda";

function App() {
  return (
    <main className="flex pt-3 gap-3">
      <AppName />
      <Schedule />
      <Agenda />
    </main>
  );
}

export default App;
