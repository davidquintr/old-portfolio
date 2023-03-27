import React from 'react'
import '../scss/CardProject.scss';
import CardButton from './CardButton';
import CardSkills from './CardSkills';

const CardProject = () =>{

    return(
        <div className='card'>
            <img className='card-image' src={`${process.env.PUBLIC_URL + "/img/kitty.png"}`} alt="hi" ></img>
            <div className='card-tech'>
                <CardSkills skills="html css js "></CardSkills>
            </div>
            <div className='card-details'>
                <h3 className='card-details-title'>Titulo</h3>
                <p className='card-details-desc'>Descripcion</p>
            </div>
            <div className='card-image-buttons'>
                <CardButton></CardButton>
            </div>
        </div>
    )

};

export default CardProject;