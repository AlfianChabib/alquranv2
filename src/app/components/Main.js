import List from "./List";
import TasbihDigital from "./TasbihDigital";
import TimePosition from "./TimePosition";

export default function Main() {
  return (
    <section className="w-full max-h-screen flex flex-col">
      <TimePosition />
      <List />
      <TasbihDigital />
    </section>
  );
}
