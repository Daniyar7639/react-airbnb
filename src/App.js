import React from 'react';
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import data from "./data"



function App() {
  let cardData = data.map((d, id) => {
    return (
    <Card 
    key={d.id}
    img={d.coverImg}
    rating={d.stats.rating}
    reviewCount={d.stats.reviewCount}
    location={d.location}
    title={d.title}
    price={d.price}
    openSpots={d.openSpots}
    />
  )
  })
  return (
    <div className="App">
      <Navbar />
      <Main />
      <section className='cards'>
      {cardData}
      </section>
      
    </div>
  );
}

export default App;
