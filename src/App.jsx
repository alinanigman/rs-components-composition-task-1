import { useState } from "react";
import "./AppLayout.module.css";
import AppLayout from "./AppLayout";
import Information from "./components/Information";
import Field from "./components/Field";
function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <AppLayout>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} setField={setField} />
    </AppLayout>
  );
}

export default App;
