import React, { useContext, useEffect, useState} from 'react';
import { ThemeContext} from './ThemeContext';
import '../scss/_darkMode.scss';


const Header = () => {
    const { darkMode } = useContext(ThemeContext);

    return(
        <footer className={"footer " + (darkMode ? "darkmode-footer" : "")}>
            <p className="footer-text">©2023 - Diseñado y programado por David Quintanilla</p>
        </footer>
    )
}

export default Header;