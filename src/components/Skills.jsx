import React, { useContext } from "react";
import '../scss/_darkMode.scss';
import '../scss/project.scss';
import dataSkills from '../assets/json/skills.json'
import { ThemeContext } from './ThemeContext';

const Skills = () => {
    const { darkMode} = useContext(ThemeContext);
    return(
        <article className={"article skills" + (darkMode ? " darkmode-skills" : "")}>
            {
                dataSkills.map(element =>(
                    !element.show && (
                        <img src={`${process.env.PUBLIC_URL + element.url}`} key={element.key} alt={element.alt.replace(' ','').toLocaleLowerCase()} title={element.alt} className="skills-app"></img>
                    )
                ))
            }
        </article>
    )
}
export default Skills;