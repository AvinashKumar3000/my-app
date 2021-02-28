import React from "react";
import '../css/MusicLibrary.css';
import { useSelector, useDispatch } from "react-redux";
import { Your, Recent, Viewed } from "../actions/Status/SubNav";

const StatusComponent = (props) => {
    const StatusSubNavReducer = useSelector(state => state.StatusSubNavReducer)
    const dispatch = useDispatch()
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Status</li>
                </ul>
            </div>
           
            <div className="fluid">
                <ul className="sticky nav-bar sub-nav flx-row">
                <li className={ StatusSubNavReducer[0] ? 'active':'inactive'} onClick={() => dispatch(Your())}>Your</li>
                    <li className={ StatusSubNavReducer[1] ? 'active':'inactive'} onClick={() => dispatch(Recent())}>Recent</li>
                    <li className={ StatusSubNavReducer[2] ? 'active':'inactive'} onClick={() => dispatch(Viewed())}>Albums</li>
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