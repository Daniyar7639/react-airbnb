import React from "react"
import image1 from "../images/image1.png"
import star1 from "../images/Star1.png"

export default function Card (props) {
    return (
        <div className="card">
            <div className="card-img">
                <img className="card-img1" src={require(`../images/${props.img}`)} />
            </div>
            <div className="card-stats">
                <img className="card-star" src={star1} />
                <span className="card-stat">{props.rating}</span>
                <span className="card-stat">({props.reviewCount})</span>
                <span className="card-stat">.</span>
                <span className="card-stat">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p> <small className="bold">From ${props.price}</small> / person</p>
        </div>
    )
}


