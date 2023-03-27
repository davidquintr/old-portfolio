import React from 'react'
import '../scss/CardProject.scss';
import CardButton from './CardButton';
import CardSkills from './CardSkills';
import works from '../assets/json/works.json';

const CardProject = () =>{

    return(
        <>
        {
            works.map((element,index) =>(
                <div className='card'>
                <img className='card-image' src={`${process.env.PUBLIC_URL + element.img}`} alt={element.title} ></img>
                <div className='card-tech'>
                    <CardSkills skills="html"></CardSkills>
                </div>
                <div className='card-details'>
                    <h3 className='card-details-title'>{element.title}</h3>
                    <p className='card-details-desc'>{element.details}</p>
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