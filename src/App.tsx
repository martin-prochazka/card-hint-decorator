import { useMemo } from "react";
import { getCards } from "./hint-decorator/source";
import { CardHelper } from "./hint-decorator/CardHelper";

function App() {
  const cards = useMemo(() => getCards(), []);

  if (!cards || cards.length === 0) return <div>Nepodařilo se načíst data</div>;

  return (
    <>
      {cards.map((card) => (
        <CardHelper key={card.id} card={card} />
      ))}
    </>
  );
}

export default App;
