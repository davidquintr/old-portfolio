import icon from '../assets/svg/logooo.svg';
import '../scss/header.scss';
import data from '../assets/json/index.json'
import ViewModes from './ViewModes'
import React, { useContext } from 'react';
import { ThemeContext} from './ThemeContext';

const Header = () => {
    const { darkMode} = useContext(ThemeContext);

    return(
        <header id={"header" + (darkMode ? " darkmode-header" : "")}>
            <div id="header-ident">
                <img src={icon} id="ident-image" alt={data.brand_img}></img>
            </div>
            <div id="header-refs">
                <ul id="refs-elements">
                    <a href=""><li>Contacto</li></a>
                </ul>
            </div>
            <div>
                <ViewModes></ViewModes>
            </div>
        </header>
    )
}
export default Header;