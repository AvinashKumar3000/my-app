import React, { useState ,useRef} from "react";
import '../../css/MusicLibrary.css';
import MusicPlayer from "../../pages/MusicPlayer";

const AlbumComponent = () => {
    const [songs, setsongs] = useState({})
    const [viewList, setviewList] = useState(Object.keys(songs))
    const [albumName, setalbumName] = useState("")
    const [movieName, setmovieName] = useState("")
    const [musicNavStatus, setmusicNavStatus] = useState([true,false,false])
    const [songId, setsongId] = useState(0)

    const childRef = useRef();

    React.useEffect(() => {
        fetch("https://api.jsonbin.io/b/6054d08a7ea6546cf3e2d965")
        .then(response => response.json())
        .then(result => {
            setsongs(result);
            console.log(songs);
            document.getElementById("home-btn").click()
        })
        .catch(error => console.log('error', error));
    }, [])

    const showAlbums = () => {
        return (
            <div className="col" style={{position:"relative"}}>
            {
                viewList.map((ele) => {
                    return (
                        <div className="row music-box" onClick={(e) => changeToMovies(e,ele)}>
                            {ele}
                        </div>
                    )
                })
            }           
            </div>
        )
    }

    const showMovies = () => {
        return (
            <div className="col" style={{position:"relative"}}>
            {
                viewList.map((ele,idx) => {
                    
                    return (
                        <div className="row music-box" onClick={(e) => changeToSongs(e,ele)}>
                            {ele}
                        </div>
                    )
                    
                })
            }           
            </div>
        )
    }

    const showSongs = () => {
        return (
            <div className="col" style={{marginTop:"20px",position:"relative"}}>
            {
                viewList.map((ele,idx) => {
                    return (
                        <div className="flx-row song-box" onClick={(e) => openMusic(e,idx)}>
                            <div className="col-3">
                                <img src={ele.Cover} alt="cover img"/>
                            </div>
                            <div className="col typo">
                                <span className="row song-li">
                                    {ele.Name}
                                </span>
                                <div className="row artist-li">
                                    {ele.Artists.join(",")}
                                </div>
                            </div>
                        </div>
                    )
                })
            }           
            </div>
        )
    }

    const changeToMovies = (e,ele) => {
        e.preventDefault()
        setalbumName(ele)
        setviewList(Object.keys(songs[ele]))
        setmusicNavStatus([false,true,false])
    }

    const changeToSongs = (e,ele) => {
        e.preventDefault()
        setmovieName(ele)
        setviewList(songs[albumName][ele])
        setmusicNavStatus([false,false,true])
        // setsong({})
        // childRef.current.closeMusic()
    }
    const backward = (e) => {
        e.preventDefault()
        setviewList(Object.keys(songs))
        setmusicNavStatus([true,false,false])
        //setsong({})
        //childRef.current.closeMusic()
        
    }
    
    const openMusic = (e,idx) => {
        e.preventDefault()
        childRef.current.openMusic(e,idx)
    }
    return (
        <div>
            { (albumName !== "" && movieName !== "") ? <MusicPlayer ref={childRef} songs={songs[albumName][movieName]}></MusicPlayer> : ""}
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
                        { musicNavStatus ? <button className="back-btn" id="home-btn" onClick={backward}>HOME</button> : "" }
                    </div>
                    {
                        musicNavStatus[0] ? showAlbums() : 
                            musicNavStatus[1] ? showMovies() :
                                musicNavStatus[2] ? showSongs() : ""
                    }
                </div>
            </div>
        </div>
        
    )
}

export default AlbumComponent;

