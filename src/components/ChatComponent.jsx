import React from "react";
import '../css/MusicLibrary.css';
import { useSelector, useDispatch } from "react-redux";
import { Individual, Group, ChatAlbums } from "../actions/chat/SubNav";
import SectionComponent from "./ChatSubComponents/SectionComponent";
import IndividualComponent from "./ChatSubComponents/IndividualComponent";
import GroupComponent from "./ChatSubComponents/GroupComponent";
import CompanyComponent from "./ChatSubComponents/CompanyComponent";

const ChatComponent = (props) => {

    const ChatSubNavList = useSelector(state => state.ChatSubNavReducer);
    const dispatch = useDispatch()
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Your Chats</li>
                </ul>
            </div>
            
            <div className="fluid">
                <ul className="nav-bar sub-nav flx-row">
                    <li className={ ChatSubNavList[0] ? 'active':'inactive'} onClick={() => dispatch(Individual())}>Individual</li>
                    <li className={ ChatSubNavList[1] ? 'active':'inactive'} onClick={() => dispatch(Group())}>Group</li>
                    <li className={ ChatSubNavList[2] ? 'active':'inactive'} onClick={() => dispatch(ChatAlbums())}>Company</li>
                </ul>
            </div>
            <hr/>
            {
                ChatSubNavList[0] ? <IndividualComponent></IndividualComponent> : ChatSubNavList[1] ? <GroupComponent></GroupComponent> : <CompanyComponent></CompanyComponent>
            }
        </div>
    )
}

export default ChatComponent;