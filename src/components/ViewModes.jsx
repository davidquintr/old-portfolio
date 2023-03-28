import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import sun from '../assets/svg/sun.svg'
import moon from '../assets/svg/moon.svg'
import '../scss/ButtonBasic.scss'

function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
      <button className={"button-altern" + (darkMode ? " darkmode-button-altern" : "")} onClick={toggleDarkMode}>
        <img src={darkMode ? moon : sun} alt="darkmode" className='button-altern-img'></img>
      </button>
  );
}

export default Header;