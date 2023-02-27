import React from 'react';
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import image1 from "./images/image1.png"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Card     
      img={"image1.png"}
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
      />
    </div>
  );
}

export default App;
