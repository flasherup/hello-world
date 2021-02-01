export const ADD_SONG = 'ADD_SONG';
export const addSong = (artist, song) => ({
    type: ADD_SONG,
    payload: { artist, song }
});


export const DELETE_SONG = 'DELETE_SONG';
export const deleteSong = index => ({
    type: DELETE_SONG,
    payload: index
});

export const SORT_SONGS = 'SORT_SONGS';
export const sortSongs = type => ({
    type: SORT_SONGS,
    payload: type
});

export const DOWNLOAD_JSON = 'DOWNLOAD_JSON';
export const DOWNLOAD_JSON_ERROR = 'DOWNLOAD_JSON_ERROR';
export const downloadJSON = url => async dispatch => {
    try{
        const response = await fetch(url, {
            method: 'GET'
        });
        if (response.ok) {
            const data = await response.json();
            dispatch({ type: DOWNLOAD_JSON, payload: data});
        } else {
            dispatch({ type: DOWNLOAD_JSON_ERROR, payload: `status: ${response.status}, ${response.statusText}`});
        
        }
    } catch(err) {
        dispatch({
            type: DOWNLOAD_JSON_ERROR,
            payload: `Fetch error:${ err }`
        });
    }
}

    

