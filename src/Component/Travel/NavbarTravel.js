import React from "react"
import path from "../../images/travel.jpg"
export default function NavbarTravelJournal() {
    return (
        <div className="navT">
            <div className="navT-logo">
                 <img src={path} alt="travel logo"/>
                 <p>my travel journal.</p>
            </div>
        </div>
    )
}