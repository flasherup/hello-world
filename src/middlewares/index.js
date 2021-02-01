import { ADD_SONG, sortSongs, DELETE_SONG , DOWNLOAD_JSON} from '../actions'


export const sortLogic = storeAPI => next => action => {
    //console.log('dispatching', action)
    let result = next(action)
    //console.log('next state', storeAPI.getState())
    /*if (action.type === ADD_SONG) {
        //console.log('test middle ware');
        storeAPI.dispatch(sortSongs('test'));
    }*/
    return result
}

export const deleteSongLogic = storeAPI => next => action => {
    if (action.type === DELETE_SONG) {
        const state = storeAPI.getState();
        const filtered = state.songs.filter((_, i) => i !== action.payload);
        action.payload = filtered;
    }
    return next(action);
}