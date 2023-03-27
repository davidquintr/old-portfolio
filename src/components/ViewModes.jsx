import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
      <button className={darkMode ? "darkmode" : ""} onClick={toggleDarkMode}>{darkMode ? "Modo oscuro" : "Modo claro"}</button>
  );
}

export default Header;