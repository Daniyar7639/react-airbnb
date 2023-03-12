import React from "react";
import "./App.css";
import Navigation from "./Component/Navigation";
import { Route, Routes } from "react-router-dom";
import Travel from "./Component/Travel/Travel";
import Airbnb from "./Component/Airbnb/Airbnb";
import MemeGenerator from "./Component/Memegenerator/Memegenerator";
import SignUPForm from "./Component/SignUpForm/SignUpForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/meme" element={<MemeGenerator />} />
        <Route path="/form" element={<SignUPForm />} />
      </Routes>
    </div>
  );
}

export default App;

/*img={d.coverImg}
rating={d.stats.rating}
reviewCount={d.stats.reviewCount}
location={d.location}
title={d.title}
price={d.price}
openSpots={d.openSpots}*/

/*img={item.imageUrl}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      title={item.title}
      startDate={item.startDate}
      endDate={item.endDate}
    description={item.description}*/
