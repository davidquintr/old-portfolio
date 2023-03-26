import React, { useState } from 'react';

function ViewMode(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () =>{
        setIsDarkMode(!isDarkMode);
    };

    return(
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    )

}