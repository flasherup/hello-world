import { ADD_SONG, DELETE_SONG, SORT_SONGS, DOWNLOAD_JSON, DOWNLOAD_JSON_ERROR } from '../actions';

const defaultState = {
    songs:[
        { artist:'Caroline Rose',   song: 'Feel the Way I Want' },
        { artist:'Sam Hunt',        song: 'Hard to Forget' },
        { artist:'Jarv Is',         song: 'House Music All Night Long' },
        { artist:'Bill Callahan',   song: 'Pigeons' },
    ],
    sortType: 'default',
    loadedJSON: null,
    loadedJSONError: null
}

export const root = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state, 
                songs:[...state.songs, action.payload]
            }
        case DELETE_SONG:
            return {
                ...state, 
                songs:action.payload
            }
        case SORT_SONGS: 
            return {
                ...state, 
                sortType:action.payload
            }
        case DOWNLOAD_JSON:
            return {
                ...state,
                loadedJSON: action.payload,
                loadedJSONError: null
            }
        case DOWNLOAD_JSON_ERROR: 
            console.log('Error', action.payload)
            return {
                ...state,
                loadedJSONError: action.payload,
                loadedJSON: null
            }

        default:
        return state;
    }
}