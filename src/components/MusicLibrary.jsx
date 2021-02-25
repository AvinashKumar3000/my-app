import React from "react";
import '../css/MusicLibrary.css';
const MusicLibrary = (props) => {
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li>Your Music</li>
                    <li>Shared Music</li>
                </ul>
            </div>
            
            <div className="fluid">
                <ul className="sticky nav-bar sub-nav flx-row">
                    <li>Playlists</li>
                    <li>Artists</li>
                    <li>Albums</li>
                </ul>
            </div>
            <hr/>
            <div className="fluid">
                <div className="search-section">
                    <div className="search flx-row">
                        <div className="search-bar flx-row">
                            <i className="icon fa fa-search"></i>
                            <input type="text" className="input" placeholder="Find my playlist"/>
                        </div>
                        <div className="btn">Filters</div>                        
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

export default MusicLibrary;