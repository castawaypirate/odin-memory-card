import "../styles/Card.css";

export function Card({ handleClick, img }) {
  return (
    <>
      <div onClick={() => handleClick(img.id)} className="card">
        <img src={img.image} alt="" />
        <p>{img.name}</p>
      </div>
    </>
  );
}
