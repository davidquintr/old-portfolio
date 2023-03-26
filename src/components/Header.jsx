import React from "react";
import icon from '../assets/svg/logodq.svg';
import '../scss/header.scss';
import data from '../assets/json/index.json'

const Header = () => {
    return(
        <header id="header">
            <div id="header-ident">
                <a href=""><img src={icon} id="ident-image" alt={data.brand_img}></img></a>
            </div>
            <div id="header-refs">
                <ul id="refs-elements">
                    <a href=""><li>Contacto</li></a>
                </ul>
            </div>
        </header>
    )
}
export default Header;