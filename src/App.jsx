import { useStoreSelector, useGame } from "@/hooks";
import AppLayout from "./AppLayout";
import Information from "./components/Information";
import Field from "./components/Field";

function App() {
  const currentPlayer = useStoreSelector((s) => s.currentPlayer);
  const isGameEnded = useStoreSelector((s) => s.isGameEnded);
  const field = useStoreSelector((s) => s.field);

  const { resetGame, handleClick } = useGame();
  return (
    <AppLayout onReset={resetGame}>
      <Information />
      <Field
        onCellClick={(index) =>
          handleClick(field, isGameEnded, currentPlayer, index)
        }
      />
    </AppLayout>
  );
}

export default App;
