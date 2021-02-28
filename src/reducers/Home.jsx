
const HomeMainNavReducer = (state=[true,false],action=null) => {
    switch(action.type){
        case 'YOURMUSIC':
            return [true,false];
        case 'PODCASTMUSIC':
            return [false,true];
        default:
            return state;
    }
}

const HomeSubNavReducer = (state=[true,false,false],action=null) => {
    switch(action.type){
        case 'PLAYLISTS':
            return [true,false,false];
        case 'ARTISTS':
            return [false,true,false];
        case 'ALBUMS':
            return [false,false,true];
        default:
            return state;
    }
}

export { HomeMainNavReducer, HomeSubNavReducer }