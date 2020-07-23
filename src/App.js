import React, { useState, useEffect } from "react";
import PhotoCard from "./components/PhotoCard";
import "./styles/App.css";
import {filterResults, getCards} from "./utils/api";
import SpeciesFilter from "./components/SpeciesFilter";

function App() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(async () => {
    let response = await getCards();
    if (filter !== '') response = filterResults(filter, response);

    const newCards = response.map( ({ name, status, species, image }) => (
        {
          title: name,
          text: `${status} ${species}`,
          img: image,
        }
    ));

    setCards(newCards);
  }, [filter]);

  const newFilter = () => {
    setFilter(document.getElementById("species-filter").value);
  }

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
          <SpeciesFilter
              newFilter={ newFilter }
          />
          { photoCards }
        </div>
      </div>
  );
}

export default App;
