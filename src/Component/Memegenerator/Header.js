import React from "react";
import  "./MemeGenerator.css";
import trollface from "../../images/imgForMeme/TrollFace.png"

const Header = () => {
    return (
        <div className="headerM">
            <div className="headerM-main">
                <div className="headerM-right">
                    <img src={require("../../images/imgForMeme/TrollFace.png")} alt="Troll-Face" />
                    <p>Meme Generator</p>
                </div>
                <div className="headerM-left">
                    <p>React Course - Project 3</p>
                </div>
            </div>
        </div>
    )
}

export default Header;