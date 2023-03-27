import React from "react";
import data from '../assets/json/skills.json';

const CardSkills = (props) => {
    
    let skills = props.skills.includes(' ') ? props.skills.split(' ') : [props.skills];
    skills = skills.slice(0, 1);

    const getData = (skill) => {
        let found;
        data.map(element => {
            if (element.dim === skill) {
                found = element;
                return
            }
        });
        return found;
    };

    return (
    <div className="mini-skills">
        {skills.map((element, index) => {
        const foundSkill = getData(element);
        return foundSkill ? (
            <img
            src={`${process.env.PUBLIC_URL + foundSkill.url}`}
            alt={`${process.env.PUBLIC_URL + foundSkill.alt.replace(" ", "").toLowerCase()}`}
            title={`${process.env.PUBLIC_URL + foundSkill.alt}`}
            key={index}
            className="mini-skills-img"
            />
        ) : null;
        })}
    </div>
    );

};

export default CardSkills;