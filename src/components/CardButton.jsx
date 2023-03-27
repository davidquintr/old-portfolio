import React from "react";
import eye from '../assets/svg/eye.svg'
import github from '../assets/svg/github.svg'
import '../scss/CardButton.scss'

const CardButton = (props) => {

    return(
        <a target="_blank" rel="noopener noreferrer" href={props.url} className="item">
            <div className="item-button">
                <img 
                src={props.mode ? eye : github} 
                alt={props.mode ? "view" : "code"} 
                className="item-button-img"></img>
                <h4 className="item-button-text">{props.mode ? "Visualizar" : "Código"}</h4>
            </div>
        </a>
    )
};

export default CardButton;