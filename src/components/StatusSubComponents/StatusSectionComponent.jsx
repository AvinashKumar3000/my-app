import React from "react";

const StatusSectionComponent = (props) => {
    
    return (
        <a href={props.link} className="container flx-row mr-minus">
            <div className="img-box-circle">  
            </div>
            <div className="text-box">
                <div className="main-topic">
                    { props.name }
                </div>
                <div className="sub-topic">
                    Today, 7:34 PM
                </div>
            </div>
        </a>
    )
}

export default StatusSectionComponent