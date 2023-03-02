import React from "react";
import memesData from "../../data/memesData";

export default function Meme() {
    let url
    function handleClick() {
        const memesArray = memesData.data.memes
        let randomNumber = Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
        return console.log(url)
    }
    
    console.log(memesData)
    return (
        <div className="meme">
            <div className="meme-main">
                <p>{url}</p>
                <div>
                    <div className="meme-inputs">
                        <input className="meme-input" type="text" placeholder="Shut up"/>
                        <input className="meme-input" type="text" placeholder="and take my money"/>
                    </div>
                    <button onClick={handleClick} className="meme-btn">Get a new meme image  🖼</button>
                </div>
            </div>
        </div>
    )
}