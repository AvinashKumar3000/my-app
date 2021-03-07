import React from "react";
import '../../css/MusicLibrary.css';


const SectionComponent = (props) => {
    
    return (
        <a href={props.link} className="container flx-row">
            <div className="img-box-circle">  
            </div>
            <div className="text-box">
                <div className="main-topic">
                    { props.name }
                </div>
                <div className="sub-topic">
                    neted here-
                </div>
                <div className="time">
                    9:47 PM
                </div>
            </div>
        </a>
    )
}

export default SectionComponent;