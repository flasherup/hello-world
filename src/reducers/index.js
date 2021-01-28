import { ADD_SONG, DELETE_SONG, SORT_SONGS } from '../actions';

const defaultState = {
    songs:[
        { artist:'Caroline Rose',   song: 'Feel the Way I Want' },
        { artist:'Sam Hunt',        song: 'Hard to Forget' },
        { artist:'Jarv Is',         song: 'House Music All Night Long' },
        { artist:'Bill Callahan',   song: 'Pigeons' },
    ],
    sortType: 'default'
}

export const root = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state, 
                songs:[...state.songs, action.payload]
            }
        case DELETE_SONG:
            const filtered = state.songs.filter((_, i) => i !== action.payload);
            return {
                songs:filtered
            }
        case SORT_SONGS: {
            return {
                ...state, 
                sortType:action.payload
            }
        }
        default:
        return state;
    }
}