    import icon from '../assets/svg/cat.svg';
    import '../scss/header.scss';
    import data from '../assets/json/index.json'
    import ViewModes from './ViewModes'
    import React, { useContext, useEffect, useState} from 'react';
    import { ThemeContext} from './ThemeContext';

    const Header = () => {
        const { darkMode} = useContext(ThemeContext);
        const [headerTransparent, setHeaderTransparent] = useState(false);

        const headerClass = () => {
            let className = "";
            if(darkMode)
                className += "darkmode-header "
            if(headerTransparent && !darkMode)
                className += "header-transparent"
            else if (headerTransparent && darkMode)
                className += "darkmode-header-transparent"

            return className
        };


        useEffect(() => {
            const handleScroll = () => {
                const scrollY = window.scrollY || window.PageYOffse;
                if(scrollY > 0)
                    setHeaderTransparent(true);
                else
                    setHeaderTransparent(false);
            };
            window.addEventListener('scroll',handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        },[]);

        return(
            <header id={"header"} className={headerClass()}>
                <div id="header-ident">
                    <img src={icon} id="ident-image" alt={data.brand_img}></img>
                </div>
                <div id="header-refs" className={darkMode ? "darkmode-header-refs" : ""}>
                    <ul id="refs-elements" className={darkMode ? "darkmode-header-refs-elements" : ""}>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                    <ViewModes></ViewModes>
                </div>
            </header>
        )
    }
    export default Header;