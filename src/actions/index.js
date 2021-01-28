export const ADD_SONG = 'ADD_SONG';
export const addSong = (artist, song) => ({
    type: ADD_SONG,
    payload: { artist, song }
});


export const DELETE_SONG = 'DELETE_SONG';
export const deleteSong = index => ({
    type: DELETE_SONG,
    payload: index
})