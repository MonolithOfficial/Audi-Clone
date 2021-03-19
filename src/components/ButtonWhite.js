import React from 'react'
import "../styles/buttonWhite.scss"

function ButtonWhite(props) {
    return (
        <button className="button-white">
            {props.text}
        </button>
    )
}

export default ButtonWhite
