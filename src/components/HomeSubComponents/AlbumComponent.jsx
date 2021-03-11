import React, { useState ,useRef} from "react";
import '../../css/MusicLibrary.css';
import MusicPlayer from "../../pages/MusicPlayer";
import { aniruth, imman } from '../../resource/Songs';

const AlbumComponent = () => {
    const [songList, setsongList] = useState({'aniruth':aniruth,'imman':imman})
    const [musicNavStatus, setmusicNavStatus] = useState(false)
    const [song, setsong] = useState({})

    const childRef = useRef();

    const forward = (e,ele) => {
        e.preventDefault()
        setmusicNavStatus(true)
        setsong(songList[ele])
        setsongList(songList[ele])
    }
    const backward = (e) => {
        e.preventDefault()
        setmusicNavStatus(false)
        setsong({})
        childRef.current.closeMusic()
        setsongList({'aniruth':aniruth,'imman':imman})
    }
    const openMusic = (e,idx) => {
        e.preventDefault()
        childRef.current.openMusic(e,idx)
    }
    return (
        <div>
            <MusicPlayer ref={childRef} songs={song}></MusicPlayer>
            <div>
                <div className="fluid">
                    <div className="search-section">
                        <div className="search flx-row">
                            <div className="search-bar flx-row">
                                <i className="icon fa fa-search"></i>
                                <input type="text" className="input" placeholder="search for songs"/>
                            </div>
                            <button className="btn">search</button>                        
                        </div>
                    </div>
                </div>
                <div className="extend-fluid">
                    <div className="song-list-head">
                        { musicNavStatus ? <button className="back-btn" onClick={backward}>HOME</button> : "" }
                    </div>
                    <div className="col" style={{position:"relative"}}>
                        {
                            Object.keys(songList).map((ele,idx) => {
                                if ( ele.endsWith("mp3") ) {
                                    return (
                                        <div className="row music-box" onClick={(e) => openMusic(e,idx)}>
                                            {ele}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="row music-box" onClick={(e) => forward(e,ele)}>
                                            {ele}
                                        </div>
                                    )
                                }
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AlbumComponent;