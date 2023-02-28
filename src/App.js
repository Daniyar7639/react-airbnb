import React from 'react';
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import data from "./data"
import NavbarTravelJournal from './Component/NavbarTravel';
import MainTravelJournal from './Component/MainTravel';
import dataT from "../src/data/dataT"



function App() {
  /*let cardData = data.map((d) => {
    return (
    <Card 
    key={d.id}
    {...d}
    />
  )
  })*/
  let cardDataT = dataT.map((item => {
    return (
      <MainTravelJournal 
      key={item.id}
      {...item}

      />
    )
  }))
  return (
    <div className="App">
      {/*<Navbar />
      <Main />
      <section className='cards'>
      {cardData}
    </section>*/}
      <section className='travelJournal'>
        <NavbarTravelJournal />
        {cardDataT}
      </section>
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