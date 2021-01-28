import { ADD_SONG, sortSongs } from '../actions'
export const sortLogic = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    if (action.type === ADD_SONG) {
        console.log('test middle ware');
        storeAPI.dispatch(sortSongs('test'));
    }
    return result
  }