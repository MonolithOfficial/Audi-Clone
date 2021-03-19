import React from 'react'
import Button from "./ButtonWhite"

import "../styles/zoomableImage.scss"
import ButtonWhite from './ButtonWhite'

function ZoomableImage(props) {
    console.log(props)
    if (props.contentAllowed === "true"){
        return (
            <div className="zoomableImageContainer">
                <img className="zoomableImage" src={props.image}/>
                <div className="ovl"></div>
                <div className="zoomableImageContent">
                    <h3>{props.heading}</h3>
                    <h4>{props.paragraph}</h4>
                    <ButtonWhite text="Read More"/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="zoomableImageContainer">
                <img className="zoomableImage" src={props.image}/>
    
                <div className="ovl"></div>
            </div>
        )
    }
    
}

export default ZoomableImage
