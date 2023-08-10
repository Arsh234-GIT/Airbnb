import React, { Component } from "react";



class Navbar extends Component {
    render() {
        return (

            <nav className="nav-container">
                <img className="nav-logo" src="../Airbnb/Images/airbnb-logo.png" alt="airbnb logo" />
                
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Sign up</li>
                    <li> Log in</li>
                  
                    
                </ul>
            </nav>

        )
    }
}
export default Navbar