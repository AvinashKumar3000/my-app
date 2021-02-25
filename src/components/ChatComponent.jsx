import React from "react";
import '../css/MusicLibrary.css';

const ChatComponent = (props) => {
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Your Chats</li>
                </ul>
            </div>
            
            <div className="fluid">
                <ul className="sticky nav-bar sub-nav flx-row">
                    <li>individual</li>
                    <li>group</li>
                    <li>Albums</li>
                </ul>
            </div>
            <hr/>
            <div className="fluid">
                <div className="search-section">
                    <div className="search flx-row">
                        <div className="search-bar flx-row">
                            <i className="icon fa fa-search"></i>
                            <input type="text" className="input" placeholder="Search..."/>
                        </div>
                        <div className="btn">Search</div>                        
                    </div>
                </div>
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
                            new playlist created her
                        </div>
                        <div className="time">
                            9:47 PM
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
                            neted here-
                        </div>
                        <div className="time">
                            9:47 PM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatComponent;