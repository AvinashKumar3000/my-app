import React from "react";
import '../css/MusicLibrary.css';

const StatusComponent = (props) => {
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Status</li>
                </ul>
            </div>
           
            <div className="fluid">
                <ul className="sticky nav-bar sub-nav flx-row">
                    <li>Your</li>
                    <li>Recent</li>
                    <li>Viewed</li>
                </ul>
            </div>
            <hr/>
            <div className="fluid nav-topic">
                Your status
            </div>
            <div className="extend-fluid">
                <div className="container flx-row">
                    <div className="img-box-circle">  
                    </div>
                    <div className="text-box">
                        <div className="main-topic">
                            Kamaraj
                        </div>
                        <div className="sub-topic">
                            21 miniutes ago
                        </div>
                    </div>
                </div>
                <div className="container flx-row">
                    <div className="img-box-circle">  
                    </div>
                    <div className="text-box">
                        <div className="main-topic">
                            Avinash
                        </div>
                        <div className="sub-topic">
                            Today, 7:34 PM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusComponent;