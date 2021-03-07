import React from "react";
import { useParams } from "react-router-dom";
import "../css/MusicLibrary.css";
import moment from 'moment'

const StatusPage = (props) => {
    const userId = useParams().id

    return (
        <div className="app">
            <div className="status-header sticky" id="myHeader" >
                <div className="inside-div">
                    <div className="user-name">
                        { userId }
                    </div>
                    <div className="user-time">
                        { moment([2021, 2, 3, 13,29]).fromNow() /** [ 1,3,2021] here month starts from 0 */ } 
                    </div>
                </div>
                <div id="status-line">
                    <hr />
                </div>
            </div>
            
            <div className="status-body">
               <div className="img">
                   hai hello
               </div>
            </div>
            <div className="status-footer">
                Your status will be appear here
            </div>
        </div>
    )
}

export default StatusPage;