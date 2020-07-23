import React, { useState, useEffect } from "react";
import PhotoCard from "./components/PhotoCard";
import "./styles/App.css";
import { mortyAttack } from "./utils/api";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const response = await mortyAttack();
    const newCards = response.map( ({ name, status, species, image }) => (
        {
          title: name,
          text: `${status} ${species}`,
          img: image,
        }
    ));

    setCards(newCards);
  }, []);

  const photoCards = cards.map((card) => (
      <PhotoCard
          key={ card.title + card.text }
          title={ card.title}
          text={ card.text }
          imgURL={ card.img }
      />
  ));

  return (
      <div className="app">
        <div className="card-deck">
          { photoCards }
        </div>
      </div>
  );
}

export default App;
