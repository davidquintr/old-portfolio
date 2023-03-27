import React from "react";
import '../scss/project.scss';
import CardProject from "./CardProject";

const Works = () => {
    return(
        <article className="article works">
            <div className="works-elements">
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
            </div>
        </article>
    )
}
export default Works;