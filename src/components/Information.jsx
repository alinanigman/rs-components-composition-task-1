import { useStoreSelector } from "@/hooks/useStoreSelector";
import InformationLayout from "./InformationLayout";

const Information = () => {
  const currentPlayer = useStoreSelector((s) => s.currentPlayer);
  const isGameEnded = useStoreSelector((s) => s.isGameEnded);
  const isDraw = useStoreSelector((s) => s.isDraw);

  const title = `Current Player: ${currentPlayer}`;
  const status = isDraw
    ? "It's a Draw!"
    : isGameEnded
      ? `Player ${currentPlayer} WINS!`
      : "Game in Progress";

  return <InformationLayout title={title} status={status} />;
};

export default Information;
