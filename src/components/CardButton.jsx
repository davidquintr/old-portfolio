import React from "react";
import eye from '../assets/svg/eye.svg'
import github from '../assets/svg/github.svg'

const CardButton = (props) => {
    return(
        <a href={props.url}>
            <div className="item-button">
                <img src={props.mode ? eye : github} alt={props.mode ? "view" : "code"} className="item-button-img"></img>
                <h4 className="item-button-text">{props.mode ? "Visualizar" : "Código"}</h4>
            </div>
        </a>
    )
};

export default CardButton;