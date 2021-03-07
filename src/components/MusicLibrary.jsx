import React from "react";
import '../css/MusicLibrary.css';
import PlayListsComponent from "./HomeSubComponents/PlayListsComponent";
import ArtistComponent from "./HomeSubComponents/ArtistComponent";
import AlbumComponent from "./HomeSubComponents/AlbumComponent";
import PodcastComponent from "./HomeSubComponents/PodcastComponent";

import { useSelector, useDispatch } from "react-redux";
import { Playlists, Artists, Albums } from "../actions/home/SubNav";
import { YourMusic, PodcastMusic } from "../actions/home/MainNav";


const SubNavResult = ( navState ) => {
    if (navState[0]) {
        return <PlayListsComponent></PlayListsComponent>
    } else if (navState[1]) {
        return <ArtistComponent></ArtistComponent>
    } else if (navState [2]) {
        return <AlbumComponent></AlbumComponent>
    }
}

const YourMusicCompoent = () => {
    const homeSubNavList = useSelector(state => state.HomeSubNavReducer);
    const dispatch = useDispatch()
    return (
        <div>
            <div className="fluid">
                <ul className="nav-bar sub-nav flx-row">
                    <li className={ homeSubNavList[0] ? 'active':'inactive'} onClick={() => dispatch(Playlists())}>Playlists</li>
                    <li className={ homeSubNavList[1] ? 'active':'inactive'} onClick={() => dispatch(Artists())}>Artists</li>
                    <li className={ homeSubNavList[2] ? 'active':'inactive'} onClick={() => dispatch(Albums())}>Albums</li>
                </ul>
            </div>
            <hr/>
            { SubNavResult(homeSubNavList) }
        </div>
    )
}
const MusicLibrary = (props) => {
    const homeMainNavList = useSelector(state => state.HomeMainNavReducer);
    const dispatch = useDispatch()
    
    return (
        <div className="main-section">
            <div className="fluid">
                <ul className="nav-bar main-nav flx-row">
                    <li className={ homeMainNavList[0] ? 'active':'inactive'} onClick={() => dispatch(YourMusic())}>Your Music</li>
                    <li className={ homeMainNavList[1] ? 'active':'inactive'} onClick={() => dispatch(PodcastMusic())}>Podcast</li>
                </ul>
            </div>
            { homeMainNavList[0] ? <YourMusicCompoent></YourMusicCompoent> : <PodcastComponent></PodcastComponent>}
            
        </div>
    )
}

export default MusicLibrary;