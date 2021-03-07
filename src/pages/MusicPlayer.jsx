import React,{ useState } from "react";
import songs from '../resource/Songs';
import "../css/MusicPlayer.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const keys = Object.keys(songs)

const MusicPlayer = (Props) => {
    const [songId, setsongId] = useState(110)
    console.log(songs[keys[songId]])
    const stepForward = (e) => {
        e.preventDefault()
        if(songId === keys.length-1)
            setsongId(0)
        else
            setsongId(songId + 1)
        return true
    }
    const stepBackward = (e) => {
        e.preventDefault()
        if(songId == 0)
            setsongId(keys.length-1)
        else
            setsongId(songId - 1)
        return true
    }
    
    return (
        <div className="mp-app">
            <section className="mp-header-section flex-row mp-w2-custom"> 
                <i className="fa fa-music"></i>
                <div><button>Add to playlist</button></div>
            </section>
            <section className="mp-img-section">
                <img src="#" alt="img"/>
            </section>
            <section  className="mp-song-details-section">
                <div className="mp-song-name-animation">
                     { keys[songId] }
                </div>
                <div className="mp-author">
                    sia
                </div>
            </section>
            <section className="mp-audio-control-section">
                <AudioPlayer
                    autoPlay
                    src={songs[keys[songId]]}
                    onPlay={e => console.log("onPlay")}
                    onEnded={stepForward}
                    // other props here
                />
            </section>
            <section className="mp-song-control-section flex-row mp-w2">
                <div className="mp-prev">
                    <button className="w3-button" onClick={stepBackward}>PREV</button>
                </div>
                <div className="mp-next">
                    <button className="w3-button" onClick={stepForward}>NEXT</button>
                </div>
            </section>
            <section className="mp-lyrics-section">
                <div className="mp-heading">
                    LYRICS
                </div>
                <div className="mp-lyrics">
                    I've give you melody
                </div>
            </section>
        </div>
    )
}

export default MusicPlayer;