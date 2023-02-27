import React from "react"
import star1 from "../images/Star1.png"

export default function Contact(props) {
    return (
                <div className="contact-card">
                    <img src={props.img}/>
                    <h3>{props.name}</h3>
                    <div className="info-group">
                        <img src={star1} />
                        <p>{props.phone}</p>
                    </div>
                    <div className="info-group">
                        <img src={star1} />
                        <p>{props.email}</p>
                    </div>
                </div>

    )
}