import React from "react";
import '../css/MusicLibrary.css';
import StatusSectionComponent from "./StatusSubComponents/StatusSectionComponent";

const StatusComponent = (props) => {
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Status</li>
                </ul>
            </div>
            <hr/>
            <div className="fluid nav-topic">
                Your status
            </div>
            <div className="extend-fluid">
                <StatusSectionComponent link="/statusPage/kamaraj" name="kamaraj"></StatusSectionComponent>
                <StatusSectionComponent link="/statusPage/av" name="avinash"></StatusSectionComponent>
                <StatusSectionComponent link="/statusPage/avi" name="avinash"></StatusSectionComponent>
                
            </div>
        </div>
    )
}

export default StatusComponent;