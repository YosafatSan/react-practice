import React, { useState } from "react";
import PhotoCard from "./components/PhotoCard";
import "./styles/App.css";
import testImg from "./img/test.png";

function App() {
  const [cards, setCards] = useState([
    {
      title: "Learn about React",
      text: "This exercise is making me learn",
      img: testImg,
    },
    {
      title: "Why react",
      text: "Because is so interesting",
      img: testImg,
    },
    {
      title: "Interesting? that sounds boring",
      text: "But is not, I just created one component",
      img: testImg,
    },
    {
      title: "One? but you have more than one card photo",
      text: "Yep! thats the magic :D",
      img: testImg,
    },
    {
      title: "Wow React its good then",
      text: "Yes! Lets practice more",
      img: testImg,
    },
    {
      title: "Lets keep learning!",
      text: "LETS GO!",
      img: testImg,
    }
  ]);

  return (
      <div className="app">
        <div className="card-deck">
          {cards.map((card, index) => (
              <PhotoCard
                  card={card}
                  index={index}
              />
          ))}
        </div>
      </div>
  );
}

export default App;
