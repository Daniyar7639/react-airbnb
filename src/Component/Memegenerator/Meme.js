import React from "react";
import memesData from "../../data/memesData";

export default function Meme() {
    //const [memeImage, setmemeImage] = React.useState('https://i.imgflip.com/4xgqu.jpg');
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    console.log(memesData)
    
    function handleClick() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme((prevState) => ({
            ...prevState,
            randomImage:url
        }))
        return console.log(meme)
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
                <img className="meme-img" src={meme.randomImage} alt="Random memeImage" />
            </div>
        </div>
    )
}