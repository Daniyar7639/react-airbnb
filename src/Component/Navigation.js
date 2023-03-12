import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="abc">
                <NavLink to='/#'><h3>HOME </h3></NavLink>
            </div>    
            <div >
                <NavLink to='/airbnb'><p>airbnb Projekt</p></NavLink>
            </div>
            <div>
                <NavLink to='/travel'><p>Travel Journal</p></NavLink>
            </div>
            <div>
                <NavLink to='/meme'><p> MemeGenerator </p></NavLink>
            </div>
            <div>
                <NavLink to='/form'><p>Sign up form</p></NavLink>
            </div>
        </div>
    )
}