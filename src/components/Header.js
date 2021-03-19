import React from 'react'
import "../styles/header.scss"

function header() {
    return (
        <header>
        <div className="header-holder">
            <ul className="left-side">
                <li>
                    <a href="#">Press & MediaCenter</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <ul className="right-side">
                <li>
                    <a href="#">DE |</a>
                </li>
                <li>
                    <a href="#">EN</a>
                </li>
            </ul>
        </div>
            
        </header>
    )
}

export default header
