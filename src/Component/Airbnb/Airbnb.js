import React from "react";
import data from "../../data/data";
import Card from "./Card";
import Main from "./Main";
import Navbar from "./Navbar";

export default function Airbnb() {
  let cardData = data.map((d) => {
    return <Card key={d.id} {...d} />;
  });
  return (
    <div className="airbnb">
      <Navbar />
      <Main />
      <section className="cards">{cardData}</section>
    </div>
  );
}
