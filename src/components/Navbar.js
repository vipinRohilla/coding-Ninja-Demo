import React from 'react'
import logo from "./images/CNLOGO.svg"
import newTag from "./images/new-tag.svg"
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="header-container">
                <div className="header-content middle-header">
                    <div className="main-logo">
                        <a href="/" className="passive-link active">
                            <img src= {logo} alt="logo"></img>
                        </a>
                    </div>
                    <ul className="menu-items">
                        <li className="menu-item">Home</li>
                        <li className="menu-item">courses</li>
                        <li className="menu-item">Practice <img src={newTag} alt="new_tag" style={{marginLeft: "8px"}}></img> </li>
                        <li className="menu-item">Events</li>
                        <li className="menu-item">Campus Ninjas</li>
                        <li className="menu-item">Blog</li>
                        <li className="menu-item"><img src="https://files.codingninjas.in/cc-desktop-2-5363.svg" alt="codingNinjas"></img></li>
                    </ul>
                </div>
                <div className="header-content right-content">
                    {/* <div className="classroom_container"> */}
                        <div className="classroom_container">
                        <div className="classroom_button">My classroom</div>
                        {/* </div> */}
                    </div>
                    <div className="login_button">Login</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar