import { useMemo } from "react";
import { getCards } from "./hint-decorator/source";
import { CardHelper } from "./hint-decorator/CardHelper";

function App() {
  const cards = useMemo(() => getCards(), []);

  return (
    <>
      {cards?.map((card) => (
        <CardHelper key={card.id} card={card} />
      ))}
    </>
  );
}

export default App;
