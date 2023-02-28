import React from "react"
import star1 from "../images/Star1.png"

export default function Card (props) {
    
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <div className="card-img">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img className="card-img1" src={require(`..//images/${props.coverImg}`)} alt="img" />
            </div>
            <div className="card-stats">
                <img className="card-star" src={star1} alt="img"/>
                <span className="card-stat">{props.stats.rating}</span>
                <span className="card-stat">({props.stats.reviewCount})</span>
                <span className="card-stat">.</span>
                <span className="card-stat">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p> <small className="bold">From ${props.price}</small> / person</p>
        </div>
    )
}


