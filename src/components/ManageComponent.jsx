import React from "react";
import '../css/MusicLibrary.css';
import { useSelector, useDispatch } from "react-redux";
import { History, Attendance, Info } from "../actions/Manage/SubNav";
const ManageComponent = (props) => {
    const ManageSubNavReducer = useSelector(state => state.ManageSubNavReducer)
    const dispatch = useDispatch()
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Management</li>
                </ul>
            </div>
            <div className="fluid">
                <ul className="nav-bar sub-nav flx-row">
                    <li className={ ManageSubNavReducer[0] ? 'active':'inactive'} onClick={() => dispatch(History())}>History</li>
                    <li className={ ManageSubNavReducer[1] ? 'active':'inactive'} onClick={() => dispatch(Attendance())}>Attendance</li>
                    <li className={ ManageSubNavReducer[2] ? 'active':'inactive'} onClick={() => dispatch(Info())}>Info</li>
                </ul>
            </div>
            <hr/>
            <div className="extend-fluid">
                
            </div>
        </div>
    )
}

export default ManageComponent;