import React from "react";
import dataT from "../../data/dataT";
import MainTravelJournal from "./MainTravel";
import NavbarTravelJournal from "./NavbarTravel";

export default function Travel() {
  let cardDataT = dataT.map((item) => {
    return <MainTravelJournal key={item.id} {...item} />;
  });
  return (
    <section className="travelJournal">
      <NavbarTravelJournal />
      {cardDataT}
    </section>
  );
}
