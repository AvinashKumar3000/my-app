
const ChatSubNavReducer = (state=[true,false,false],action=null) => {
    switch(action.type){
        case 'INDIVIDUAL':
            return [true,false,false];
        case 'GROUP':
            return [false,true,false];
        case 'ALBUMS':
            return [false,false,true];
        default:
            return state;
    }
}

export { ChatSubNavReducer }