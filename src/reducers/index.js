import { ADD_SONG, DELETE_SONG } from '../actions';

const defaultState = {
    songs:[
        { artist:'Caroline Rose',   song: 'Feel the Way I Want' },
        { artist:'Sam Hunt',        song: 'Hard to Forget' },
        { artist:'Jarv Is',         song: 'House Music All Night Long' },
        { artist:'Bill Callahan',   song: 'Pigeons' },
    ]
}

export const root = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                songs:[...state.songs, action.payload]
            }
        case DELETE_SONG:
            const filtered = state.songs.filter((_, i) => i !== action.payload);
            return {
                songs:filtered
            }
        default:
        return state;
    }
}