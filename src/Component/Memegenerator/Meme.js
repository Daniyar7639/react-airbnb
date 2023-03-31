import React from "react";



export default function Meme() {
    //const [memeImage, setmemeImage] = React.useState('https://i.imgflip.com/4xgqu.jpg');
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

     /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemeImages(data.data.memes)
        }
        getMemes()

        /*
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
        */
    }, [])

    console.log(allMemeImages)

    function handleChange(event) {
       const {name, value} = event.target
       setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
       }))
    }
   
    function handleSubmit(event) {
        event.preventDefault()
        //const memesArray = allMemeImages.data.memes
        //console.log(memesArray)
        const randomNumber = Math.floor(Math.random()*allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme((prevState) => ({
            ...prevState,
            randomImage:url
        }))
        
    }
 
    return (
        <div className="meme">
            <div className="meme-main">
                <form onSubmit={handleSubmit}>
                    <div className="meme-inputs">
                        <input 
                            className="meme-input"
                            type="text" 
                            placeholder="Shut up"
                            name="topText"
                            onChange={handleChange}
                            value={meme.topText}
                         />
                        <input 
                            className="meme-input" 
                            type="text" 
                            placeholder="and take my money"
                            name="bottomText"
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                    </div>
                    <button className="meme-btn">Get a new meme image  🖼</button>
                </form>
                <div className="meme">
                    <img className="meme-img" src={meme.randomImage} alt="Random memeImage" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                
            </div>
        </div>
    )
}