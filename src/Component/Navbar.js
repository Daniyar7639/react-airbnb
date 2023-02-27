import React from "react";
import logo from "../images/logo.png"


const Navbar = () => {
    return (
        <nav>
        <div className='nav-content'>
            <a href="#" target={"_blank"}><img src={logo}/></a>
        </div>

       </nav>
    )
}
export default Navbar;