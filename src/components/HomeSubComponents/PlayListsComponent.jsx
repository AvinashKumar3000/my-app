import React from "react";
import '../../css/MusicLibrary.css';


const PlayListsComponent = () => {
    
    return (
        <div>
            <div className="fluid">
                <div className="search-section">
                    <div className="search flx-row">
                        <div className="search-bar flx-row">
                            <i className="icon fa fa-search"></i>
                            <input type="text" className="input" placeholder="Find my playlist"/>
                        </div>
                        <button className="btn">Filters</button>                        
                    </div>
                </div>
            </div>
            <div className="extend-fluid">
                <div className="container flx-row">
                    <div className="img-box">
                        
                    </div>
                    <div className="text-box">
                        <div className="main-topic">
                            Create Playlist
                        </div>
                        <div className="sub-topic">
                            new playlist created here-
                        </div>
                    </div>
                </div>
                <div className="container flx-row">
                    <div className="img-box">
                        
                    </div>
                    <div className="text-box">
                        <div className="main-topic">
                            Create Playlist
                        </div>
                        <div className="sub-topic">
                            new playlist created here-
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayListsComponent;