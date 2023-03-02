import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import  "./MemeGenerator.css";

export default function MemeGenerator() {
    return (
        <div className="memegenerator">
            <Header />
            <Meme />
        </div>
    )
};