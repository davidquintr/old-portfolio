import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext';
import '../scss/project.scss';
import project from '../assets/json/project.json'
import data from '../assets/json/index.json'
import deimg from '../assets/img/deibi.png';

const Project = () => {
    const { darkMode} = useContext(ThemeContext);

    return(
        <article className={"article project internal-padef" + (darkMode ? " darkmode-projects" : "")}>
            <img src={deimg} alt={data.author}className="project-img"></img>
            <div>
                <h2 className="project-header">{data.author}</h2>
                <p className="project-details">{project.esp.details}</p>
            </div>
        </article>
    )
}
export default Project;