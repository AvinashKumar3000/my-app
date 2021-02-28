
const ManageSubNavReducer = (state=[true,false,false],action=null) => {
    switch(action.type){
        case 'HISTORY':
            return [true,false,false];
        case 'ATTENDANCE':
            return [false,true,false];
        case 'INFO':
            return [false,false,true];
        default:
            return state;
    }
}

export { ManageSubNavReducer }