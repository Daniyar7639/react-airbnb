import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
        <div >
            <NavLink to='/airbnb'>airbnb Projekt</NavLink>
        </div>
        <div>
            <NavLink to='/travel'> Travel Journal </NavLink>
        </div>
        <div>
            <NavLink to='/new'> New Pro </NavLink>
        </div>
        </div>
    )
}