import { Card } from "./Card.jsx";
import "../styles/CardGrid.css";

export function CardGrid({ handleClick, data }) {
  return (
    <>
      <div className="card-grid">
        {data.map((img) => (
          <Card handleClick={handleClick} key={img.id} img={img}></Card>
        ))}
      </div>
    </>
  );
}
