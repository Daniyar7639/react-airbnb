import React from "react";
import memesData from "../../data/memesData";

export default function Meme() {
    const [memeImage, setmemeImage] = React.useState('');
    
    function handleClick() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setmemeImage(memesArray[randomNumber].url)
        return console.log(memeImage)
    }
   
 
    return (
        <div className="meme">
            <div className="meme-main">
                <div>
                    <div className="meme-inputs">
                        <input className="meme-input" type="text" placeholder="Shut up"/>
                        <input className="meme-input" type="text" placeholder="and take my money"/>
                    </div>
                    <button onClick={handleClick} className="meme-btn">Get a new meme image  🖼</button>
                </div>
                <img className="meme-img" src={memeImage} alt="Random memeImage" />
            </div>
        </div>
    )
}