export function Score({ score, bestScore }) {
  return (
    <div className="score-board">
      <h5>Score: {score}</h5>
      <h5>Best Score: {bestScore}</h5>
    </div>
  );
}
