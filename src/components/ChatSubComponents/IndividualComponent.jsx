import React from "react";
import '../../css/MusicLibrary.css';
import SectionComponent from "./SectionComponent";

const IndividualComponent = () => {
    
    return (
        <div className="extend-fluid">
            <div className="search-section">
                <div className="search flx-row">
                    <div className="search-bar flx-row">
                        <i className="icon fa fa-search"></i>
                        <input type="text" className="input" placeholder="Search..."/>
                    </div>
                    <button className="btn">Search</button>                        
                </div>
            </div>
            <SectionComponent link="/chatPage/kamaraj" name="kamaraj"></SectionComponent>
            <SectionComponent link="/chatPage/kamaraj" name="avinash"></SectionComponent>
        </div>
    )
}

export default IndividualComponent;