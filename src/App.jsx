import { useSelector } from "react-redux";
import { selectCurrentPlayer, selectIsGameEnded } from "./selectors";
import { useGame } from "./hooks";
import AppLayout from "./AppLayout";
import Information from "./components/Information";
import Field from "./components/Field";

function App() {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const field = useSelector((s) => s.field);

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
