import React from "react";
import '../css/MusicLibrary.css';

const ManageComponent = (props) => {
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Management</li>
                </ul>
            </div>
            <div className="fluid">
                <ul className="sticky nav-bar sub-nav flx-row">
                    <li>History</li>
                    <li>Attendance</li>
                    <li>info</li>
                </ul>
            </div>
            <hr/>
            <div className="extend-fluid">
                
            </div>
        </div>
    )
}

export default ManageComponent;