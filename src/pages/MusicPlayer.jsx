import React,{ useState ,forwardRef, useImperativeHandle } from "react";
import "../css/MusicPlayer.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const MusicPlayer = forwardRef((props, ref) => {
    const [songId, setsongId] = useState(0)
    const [hide, sethide] = useState(false)
    const [appVisibility, setappVisibility] = useState(false)
    const keys = Object.keys(props.songs)

    useImperativeHandle(ref, () => ({
        openMusic(e,idx) {
            setsongId(idx)
            if(!appVisibility)
                switchAppVisibility(e)
        },
        closeMusic() {
            setappVisibility(false)
        }
    }));

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
    
    const showEvent = (e) => {
        e.preventDefault()
        document.getElementById("hide-section").style.display = "block";
        sethide(false)
    }
    const hideEvent = (e) => {
        e.preventDefault()
        sethide(true)
        document.getElementById("hide-section").style.display = "none";
        console.log("hai")
    }
    const switchAppVisibility = (e) => {
        e.preventDefault()
        setappVisibility(!appVisibility)
    }
    return (
        <div className="mp-app" id="shown-block" style={appVisibility ? {display:"block"}:{display:"none"}}>
            <div id="hide-section">
                <section className="mp-header-section flex-row mp-w2-custom"> 
                    <i className="fa fa-angle-down" onClick={hideEvent} id="down-up-btn"></i> 
                    <div><button>Add to playlist</button></div>
                </section>
                <section className="mp-img-section">
                    <img src={props.songs[songId].Cover} alt="img"/>
                </section>
                <section  className="mp-song-details-section">
                    <div className="mp-song-name-animation">
                        { props.songs[songId].Name }
                    </div>
                    <div className="mp-author">
                        { props.songs[songId].Artists.join(",") }
                    </div>
                </section>
                <section className="mp-song-control-section flex-row mp-w2">
                    <div className="mp-prev">
                        <button className="w3-button" onClick={stepBackward}>PREV</button>
                    </div>
                    <div className="mp-next">
                        <button className="w3-button" onClick={stepForward}>NEXT</button>
                    </div>
                </section>
            </div>
            <section className="mp-audio-control-section" >
                {
                    hide ? 
                        <div className="show-btn" >
                            <div className="flx-row">
                                <button style={{height:"40px",width:"100px"}} onClick={switchAppVisibility} >Close</button>
                                <button style={{height:"40px",width:"100px",margin:"auto",marginLeft:"100px"}} onClick={showEvent} >show player</button>
                            </div>
                            <div className="mp-song-name-animation" style={{marginTop:"20px"}}>
                                { props.songs[songId].Name }
                            </div>
                        </div>
                        : ""
                }
                <AudioPlayer
                    autoPlay
                    src={props.songs[songId].Url}
                    onPlay={e => console.log("onPlay")}
                    onEnded={stepForward}
                    // other props here
                />
            </section>
            
        </div>
    )
})

export default MusicPlayer;