import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext';
import '../scss/_darkMode.scss';
import '../scss/project.scss';
import CardProject from "./CardProject";

const Works = () => {
    const { darkMode} = useContext(ThemeContext);
    return(
        <article className={"article works" + (darkMode ? " darkmode-article" : "")}>
            <div className="works-elements">
                <CardProject></CardProject>
            </div>
        </article>
    )
}
export default Works;