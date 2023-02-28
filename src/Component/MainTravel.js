import React from "react";

const MainTravelJournal = (props) => {
    return (
        <div className="mainT">
            <div className="mainT-img">
                <img src={props.imageUrl} alt="Japan photo" />
            </div>
            <div className="mainT-rightSection">
                <div className="mainT-location">
                    <div><i class="uil uil-location-point"></i></div>
                    <p className="mainT-country">{props.location}</p>
                    <a className="mainT-googleMap" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <div className="mainT-date">
                    <span>{props.startDate}</span>
                    <span>-</span>
                    <span>{props.endDate}</span>
                </div>
                <div className="mainT-text">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default MainTravelJournal