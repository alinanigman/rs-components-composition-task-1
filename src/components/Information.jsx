import { useSelector } from "react-redux";
import {
  selectCurrentPlayer,
  selectIsGameEnded,
  selectIsDraw,
} from "@/selectors";
import InformationLayout from "./InformationLayout";

const Information = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);

  const title = `Current Player: ${currentPlayer}`;
  const status = isDraw
    ? "It's a Draw!"
    : isGameEnded
      ? `Player ${currentPlayer} WINS!`
      : "Game in Progress";

  return <InformationLayout title={title} status={status} />;
};

export default Information;
