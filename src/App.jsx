import React from "react";
import allGames from "./gamesInfo.js";
import Connect from "./Connect.jsx";
import GameCard from "./GameCard.jsx";

export default function App() {
  function CreateCard(data) {
    return (
      <GameCard img={data.img} id={data.id} key={data.index} code={data.code} />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1 className="title">10 JAVASCRIPT GAMES</h1>
      <div className="projects">{allGames.map(CreateCard)}</div>
      <Connect />
    </div>
  );
}
