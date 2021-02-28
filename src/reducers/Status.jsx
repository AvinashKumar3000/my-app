
const StatusSubNavReducer = (state=[true,false,false],action=null) => {
    switch(action.type){
        case 'YOUR':
            return [true,false,false];
        case 'RECENT':
            return [false,true,false];
        case 'VIEWED':
            return [false,false,true];
        default:
            return state;
    }
}

export { StatusSubNavReducer }