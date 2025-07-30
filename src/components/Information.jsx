import InformationLayout from "./InformationLayout";

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  const title = `Current Player: ${currentPlayer}`;
  const status = isGameEnded
    ? `Player ${currentPlayer} WINS!`
    : isDraw
      ? "It's a Draw!"
      : "Game in Progress";

  return <InformationLayout title={title} status={status} />;
};

export default Information;
