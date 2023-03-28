import React, { useContext } from "react";
import '../scss/_darkMode.scss';
import '../scss/CardProject.scss';
import CardButton from './CardButton';
import CardSkills from './CardSkills';
import works from '../assets/json/works.json';
import { ThemeContext } from './ThemeContext';

const CardProject = () =>{
    const { darkMode} = useContext(ThemeContext);

    return(
        <>
        {
            works.map((element,index) =>(
                <div className={'card' + (darkMode ? " darkmode-card" : "")} key={index}>
                    <img className='card-image' src={`${process.env.PUBLIC_URL + element.img}`} alt={element.title} ></img>
                    <div className={'card-tech' + (darkMode ? " darkmode-card-tech" : "")}>
                        <CardSkills skills={element.tech}></CardSkills>
                    </div>
                    <div className={'card-details' + (darkMode ? " darkmode-card-details" : "")}>
                        <h3 className={'card-details-title' + (darkMode ? " darkmode-card-details-title" : "")}>{element.title}</h3>
                        <p className={'card-details-desc' + (darkMode ? " darkmode-card-details-desc" : "")}>{element.details}</p>
                    </div>
                    <div className='card-buttons'>
                        {element.urlView !== "" && <CardButton mode={true} url={element.urlView}></CardButton>}
                        {element.urlCode !== "" &&<CardButton mode={false} url={element.urlCode}></CardButton>}
                    </div>
                </div>
            ))
        }
        </>
    )

};

export default CardProject;