import React from 'react'
import "../styles/TopNav.scss"

function TopNav() {
    return (
        <div id="topnav-holder">
            <div className="topNav">
                <div id="burger-menu">
                    <div id="burger-icon">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </div>
                    <p className="menuLink">Menu</p>
                </div>
                <div id="center-icon-container">
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="32">
                        <path fill="none" fillRule="evenodd" stroke="#000" strokeWidth="3.584" d="M15.401 2C7.84 2.25 1.876 8.475 2.002 15.986c.126 7.51 6.295 13.534 13.862 13.534 7.566 0 13.735-6.023 13.861-13.534C29.851 8.475 23.888 2.25 16.325 2h-.924zm19.41 0c-7.563.25-13.526 6.475-13.4 13.986.126 7.51 6.295 13.534 13.862 13.534 7.566 0 13.735-6.023 13.861-13.534C49.26 8.475 43.297 2.25 35.734 2h-.924zm19.408 0c-7.562.25-13.525 6.475-13.4 13.986.127 7.51 6.296 13.534 13.863 13.534 7.566 0 13.735-6.023 13.861-13.534C68.67 8.475 62.706 2.25 55.143 2h-.924zm19.41 0c-7.563.25-13.526 6.475-13.4 13.986.126 7.51 6.295 13.534 13.862 13.534 7.566 0 13.735-6.023 13.861-13.534C88.078 8.475 82.115 2.25 74.552 2h-.924z"/>
                    </svg>
                    </a>
                </div>
                <ul className="topNav-right-side">
                    <li>
                        <svg id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                            <path fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1"
                            d="M22,22 L13.7,13.7 L22,22 Z M15.5,9 C15.6,12.5 12.9,15.4 9.4,15.5 C9.3,15.5 9.1,15.5 9,15.5 C5.4,15.5 2.5,12.6 2.5,9 C2.5,5.4 5.4,2.5 9,2.5 C12.6,2.5 15.5,5.4 15.5,9 C15.5,9 15.5,9 15.5,9 Z"/>
                        </svg> 
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <path fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"
                            d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"/>
                        </svg>  */}
                    </li>
                    <li>FLAG</li>
                </ul>
            </div>
        </div>
    )
}

export default TopNav
