import React, { useContext, useState} from 'react';
import error from '../assets/svg/error.svg'
import sucess from '../assets/svg/success.svg'
import { ThemeContext} from './ThemeContext';
import '../scss/alert.scss';
import '../scss/_darkMode.scss';



const Alert = (props) =>{
    const { darkMode } = useContext(ThemeContext);

    return(
        <div className={"contain-alert " + (props.type === "error" ? "action" : props.type === "success" ? "action" : "nothing") + (darkMode ? " darkmode-contain-alert" : "") }>
            <img className="contain-alert-img action" src={props.type === "error" ? error : props.type === "success" ? sucess : "null" } alt="alertimg"></img>
            <p className="contain-alert-text">{props.type === "error" ? "Ha ocurrido un error en el envío del formulario" : props.type === "success" ? "Se ha enviado correctamente el formulario" : "null" }</p>
        </div>
    )

}

export default Alert;