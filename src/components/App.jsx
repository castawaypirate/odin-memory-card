import { useState, useEffect } from "react";
import { CardGrid } from "./CardGrid.jsx";
import { Score } from "./Score.jsx";
import "../styles/App.css";

function App() {
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  async function fetchData() {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12",
    );
    const json = await response.json();
    return json;
  }

  useEffect(() => {
    const fetch = async () => {
      const fetchedData = await fetchData();
      setData([...fetchedData]);
    };
    fetch();
  }, []);

  async function handleClick(id) {
    if (clicked.includes(id)) {
      const fetched = await fetchData();
      setData([...fetched]);
      setClicked([]);
      if (clicked.length > bestScore) {
        setBestScore(clicked.length);
      }
    } else {
      setClicked([...clicked, id]);
      setData(() => {
        return [...shuffle(data)];
      });
    }
  }

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Odin Memory Card</h1>
        <Score score={clicked.length} bestScore={bestScore}></Score>
      </div>
      <p>
        Earn points by clicking the characters, Morty! But don't click the same
        one twice, or you'll collapse the timeline!
      </p>
      <CardGrid handleClick={handleClick} data={data}></CardGrid>
    </div>
  );
}

export default App;
