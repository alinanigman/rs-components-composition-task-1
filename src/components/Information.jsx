import InformationLayout from "./InformationLayout";

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  const title = `Current Player: ${currentPlayer}`;
  const status = isDraw
    ? "It's a Draw!"
    : isGameEnded
      ? `Player ${currentPlayer} WINS!`
      : "Game in Progress";

  return <InformationLayout title={title} status={status} />;
};

export default Information;
