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
                <div className='header-alert'>
                    <p className='alert-element'>¡Este portafolio está obsoleto! Puedes ver el <a href='https://davidquintr.github.io/portfolio/'>Nuevo Portafolio</a> justo acá</p>
                </div>
                <div className='header-content'>
                    <div id="header-refs" className={darkMode ? "darkmode-header-refs" : ""}>
                        <a href='#'><img src={icon} id="header-ident" alt={data.brand_img}></img></a>
                        <ul id="refs-elements" className={darkMode ? "darkmode-header-refs-elements" : ""}>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                        <ViewModes></ViewModes>
                    </div>
                </div>
            </header>
        )
    }
    export default Header;