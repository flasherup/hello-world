export const ADD_SONG = 'ADD_SONG';
export const addSong = (artist, song) => ({
    type: ADD_SONG,
    payload: { artist, song }
});