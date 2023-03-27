import React from "react";
import '../scss/project.scss';
import project from '../assets/json/project.json'
import dataSkills from '../assets/json/skills.json'

const Skills = () => {
    return(
        <article className="article skills">
            {
                dataSkills.map(element =>(
                    <img 
                    src={`${process.env.PUBLIC_URL + element.url}`} 
                    key={element.key} alt={element.alt.replace(' ','').toLocaleLowerCase()} 
                    title={element.alt} 
                    className="skills-app"></img>
                ))
            }
        </article>
    )
}
export default Skills;