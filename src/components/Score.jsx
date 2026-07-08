import "../styles/Score.css";

export function Score({ score, bestScore }) {
  return (
    <div className="score-board">
      <h5>
        <span>Score:</span> {score}
      </h5>
      <h5>
        <span>Best Score:</span> {bestScore}
      </h5>
    </div>
  );
}
